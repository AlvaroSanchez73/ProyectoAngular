import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.services';
import { Rendicion } from 'src/app/services/rendicion';
import { FilterRendicionesComponent } from './filter-rendiciones/filter-rendiciones.component';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.services';
@Component({
  selector: 'app-resumen-de-giros',
  templateUrl: './resumen-de-giros.component.html',
  styleUrls: ['./resumen-de-giros.component.css']
})

export class ResumenDeGirosComponent implements OnInit {
  [x: string]: any;
  @ViewChild(FilterRendicionesComponent, { static: true }) FilterRendicionesComponentChild;
  public displayedColumns: string[] = ['programa', 'beneficiario', 'numGiro', 'fechaGiro', 'montoGiro', 'MontoAprobado', 'Reintegros', 'saldo', 'devolverPrograma'];
  public dataSource: any = [];
  devolverPrograma: Array<Object> = [];


  constructor(
    private AuthService: AuthService,
    private router: Router,
    private Rendicion: Rendicion,
    private utils: UtilsService
  ) {
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() : void {
    this.utils.showSpinner();
    let params ='offset=0&limit=100'
    this.Rendicion.visualizarResumenGiroTabla("?"+params)
    .subscribe( 
        (data)=>
            {
               
                this.dataSource = new MatTableDataSource<ElementList>(<any> data['rendiciones']);
                this.dataSource.paginator = this.paginator;
                this.utils.hideSpinner();
                
            },
        (error) => 
            {
              var errorMessage:any= error;
              this.utils.hideSpinner();
            }
    )
  }
  filterElements() {
    let FilterRendicionesComponent = this.FilterRendicionesComponentChild;

    FilterRendicionesComponent.
      filter(FilterRendicionesComponent.proyectoFilter,
             FilterRendicionesComponent.rutFilter,
             FilterRendicionesComponent.beneficiarioFilter
            )
      .subscribe(
        (data) => {
          console.info(data);
          this.dataSource = new MatTableDataSource<ElementList>(<any>data['rendicionesFilter']);
          this.dataSource.paginator = this.paginator;
          this.utils.hideSpinner();
        },
        (error: any) => {
          var errorMessage: any = error;
          this.utils.hideSpinner();
        }
      )
  }

}
export interface ElementList {
}