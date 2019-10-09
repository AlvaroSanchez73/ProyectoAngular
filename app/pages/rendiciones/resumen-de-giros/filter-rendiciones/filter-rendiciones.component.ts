import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.services';
import { Rendicion } from 'src/app/services/rendicion';

@Component({
  selector: 'app-filter-rendiciones',
  templateUrl: './filter-rendiciones.component.html',
  styleUrls: ['./filter-rendiciones.component.css']
})
export class FilterRendicionesComponent implements OnInit {
  
  public proyectoFilter: string = "";
  public rutFilter: string = "";
  public beneficiarioFilter: string = "";

  @Output() resultFilters: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private Rendicion: Rendicion,
    private utils: UtilsService
  ) {
  }

  ngOnInit() {
    //this.filterActividades()
  }

    public filter(proyecto, rut, beneficiario) {
      var filtrar = false;

      if(proyecto != null && proyecto != "" || rut != null && rut != "" || beneficiario != null && beneficiario != ""){
        filtrar = true;
        this.proyectoFilter = proyecto;
        this.rutFilter = rut;
        this.beneficiarioFilter = beneficiario;
      }
      if(filtrar){
        this.utils.showSpinner();
        return this.Rendicion.filtroResumenTabla(proyecto.trim(),rut.trim(),beneficiario.trim(),0, 100)   
      }else{
        this.utils.message("Debe filtrar por al menos un campo.")
      }
    }

  }
  



