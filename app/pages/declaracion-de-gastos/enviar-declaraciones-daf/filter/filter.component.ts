import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Declaraciones } from 'src/app/services/declaraciones';
import { UtilsService } from 'src/app/services/utils.services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public projectFilter: string = "";

  @Output() public duration: string;
  @Output() public startDate: string;
  @Output() public endDate: string;
  @Output() resultFilters: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private Declaraciones: Declaraciones,
    private utils: UtilsService
  ) {
  }

  ngOnInit() {
    //this.filterActividades()
  }


  public filter(project) {
    if (project == null || project == "") {
      this.utils.message("Debe ingresar un código de proyecto");
    } else {
      this.utils.showSpinner();
      return this.Declaraciones.visualizarDeclaracionesTabla(project.trim(), 0, 1000)
    }
  }


}
