import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.services';
import { Declaraciones } from 'src/app/services/declaraciones';
import { FilterComponent } from './filter/filter.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Daf } from 'src/app/models/daf';
import { UtilsService } from 'src/app/services/utils.services';
@Component({
  selector: 'app-enviar-declaraciones-daf',
  templateUrl: './enviar-declaraciones-daf.component.html',
  styleUrls: ['./enviar-declaraciones-daf.component.css']
})

export class EnviarDeclaracionesDafComponent implements OnInit {
  [x: string]: any;
  @ViewChild(FilterComponent, { static: true }) filterComponentChild;
  public displayedColumns: string[] = ['report_number', 'start_date', 'end_date', 'duration', 'declaraciones', 'enviar', 'total_approved', 'amount', 'programa', 'envioDaf', 'daf', 'select'];
  public dataSource: any = [];
  public project: any = {};
  public isDisable : boolean = false;
  dataform: Daf = new Daf();
  returnurl: string;
  msgregistro: string;
  envioDeclaraciones: Array<Object> = [];
  envioExcel: Array<Object> = [];

  @Output() public year: number;
  @Output() public trim: number;

  selection: SelectionModel<ElementList> = new SelectionModel<ElementList>(true, []);


  constructor(
    private AuthService: AuthService,
    private router: Router,
    private Declaraciones: Declaraciones,
    private utils: UtilsService
  ) {
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
  }
  filterElements() {
    let filterComponent = this.filterComponentChild;
    filterComponent.
      filter(filterComponent.projectFilter)
      .subscribe(
        (result) => {
          for (var d = 0; d < result.declarations.length; d++) {
            result.declarations[d].DECLARACIONES = this.utils.numberToBoolean(result.declarations[d].DECLARACIONES);
            result.declarations[d].ENVIAR_DAF = this.utils.numberToBoolean(result.declarations[d].ENVIAR_DAF);
            result.declarations[d].PERIODO = this.utils.periodoToString(result.declarations[d].PERIODO);

            
          }
          this.dataSource = new MatTableDataSource<ElementList>(<any>result.declarations);
          this.dataSource.paginator = this.paginator;
          this.project = result.project
          this.utils.hideSpinner();
        },
        (error) => {
          var errorMessage: any = error;
          this.utils.hideSpinner();
        }
      )
  }


  descargarXls()
  {
  
    this.Declaraciones.descargarXls();
  }

  isAllSelected(val) {
    
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
   }

  masterToggle(val) {
    this.isAllSelected(val) ?
    this.selection.clear() :

    // console.log(val)
    // var objeto = {
    //   'numero_informe': val.NUMERO_INFORME,
    //   'periodo': val.PERIODO,
    //   'enviar_daf': val.ENVIAR_DAF,
    //   'declaraciones': val.DECLARACIONES,
    //   'recibida_programa': val.FECHA_RECIBIDA_PROGRAMA,
    //   'recibida_daf': val.FECHA_RECEPCION_DAF,
    //   'monto_gastado': val.MONTO_GASTADO,
    //   'monto_individual': val.MONTO_INDIVIDUAL_GIRO,
    //   'fecha_envio_daf': val.FECHA_ENVIO_DAF
    // }
    // objeto['numero_informe'] = this.utils.undefinedToNull(objeto['numero_informe']);
    // objeto['periodo'] = this.utils.undefinedToNull(objeto['periodo']);
    // objeto['recibida_daf'] = this.utils.undefinedToNull(objeto['recibida_daf']);
    // objeto['recibida_programa'] = this.utils.undefinedToNull(objeto['recibida_programa']);
    // objeto['declaraciones'] = this.utils.booleanToNumber(objeto['declaraciones']);
    // objeto['enviar_daf'] = this.utils.booleanToNumber(objeto['enviar_daf']);
    // objeto['monto_gastado'] = this.utils.undefinedToNull(objeto['monto_gastado']);
    // objeto['monto_individual'] = this.utils.undefinedToNull(objeto['monto_individual']);
    // objeto['enviar_daf'] = this.utils.booleanToNumber(objeto['enviar_daf']);
    // objeto['fecha_envio_daf'] = this.utils.undefinedToNull(objeto['fecha_envio_daf']);

    // this.envioExcel.push(objeto);
    this.dataSource.data.forEach(val => this.selection.select(val['NUMERO_INFORME']));
   }

  ischeckDaf(val) {
    var objeto = {
      'proyecto': val.PROYECTO,
      'periodo': val.PERIODO,
      'enviar_daf': val.ENVIAR_DAF,
      'declaraciones': val.DECLARACIONES,
      'recibida_programa': val.FECHA_RECIBIDA_PROGRAMA,
      'recibida_daf': val.FECHA_RECEPCION_DAF,
      'monto_gastado': val.MONTO_GASTADO,
      'monto_individual': val.MONTO_INDIVIDUAL_GIRO,
      'fecha_envio_daf': val.FECHA_ENVIO_DAF
    }
    objeto['periodo'] = this.utils.periodoToNumber(objeto['periodo']);
    objeto['recibida_daf'] = this.utils.undefinedToNull(objeto['recibida_daf']);
    objeto['recibida_programa'] = this.utils.undefinedToNull(objeto['recibida_programa']);
    objeto['declaraciones'] = this.utils.booleanToNumber(objeto['declaraciones']);
    objeto['enviar_daf'] = this.utils.booleanToNumber(objeto['enviar_daf']);
    objeto['monto_gastado'] = this.utils.undefinedToNull(objeto['monto_gastado']);
    objeto['monto_individual'] = this.utils.undefinedToNull(objeto['monto_individual']);
    objeto['enviar_daf'] = this.utils.booleanToNumber(objeto['enviar_daf']);
    objeto['fecha_envio_daf'] = this.utils.undefinedToNull(objeto['fecha_envio_daf']);

    if (val.ENVIAR_DAF) {
      this.envioDeclaraciones.push(objeto);
      console.log(objeto);
    } else {
      for (var obj = 0; obj < this.envioDeclaraciones.length; obj++) {
        if (this.envioDeclaraciones[obj]['periodo'] == objeto['periodo']) {
          this.envioDeclaraciones.splice(obj, 1);
        }
        console.log(objeto);
      }
    }
    this.isDisable=true;
    for(var ed = 0; ed < this.envioDeclaraciones.length; ed++){
      if(this.envioDeclaraciones[ed]['monto_gastado'] != this.envioDeclaraciones[ed]['monto_individual'])
      {
        this.utils.message("No puede enviar declaración porque sus montos no cuadran");
        this.isDisable=false;
      }
    }
  }





  enviarDaf() {
    if (this.envioDeclaraciones.length > 0) {
      this.utils.showSpinner();
      this.Declaraciones.envioDaf(this.envioDeclaraciones)
        .subscribe(
          data => {
            for (var d = 0; d < data.declarations.length; d++) {
              
              data.declarations[d].DECLARACIONES = this.utils.numberToBoolean(data.declarations[d].DECLARACIONES);
              data.declarations[d].ENVIAR_DAF = this.utils.numberToBoolean(data.declarations[d].ENVIAR_DAF);
              data.declarations[d].PERIODO = this.utils.periodoToString(data.declarations[d].PERIODO);
              console.log(data);
            }
            this.dataSource = new MatTableDataSource<ElementList>(<any>data.declarations);
            this.dataSource.paginator = this.paginator;
            this.envioDeclaraciones = [];
            console.log(this.envioDeclaraciones);
            this.utils.hideSpinner();
          },
          error => {
            this.envioDeclaraciones = [];
            this.utils.hideSpinner();
          });
    } else {
      this.utils.message("No hay declaraciones seleccionadas para enviar");
    }
  }

}
export interface ElementList {
}
