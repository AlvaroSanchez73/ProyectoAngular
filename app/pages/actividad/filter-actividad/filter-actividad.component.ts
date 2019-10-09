import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Declaraciones } from 'src/app/services/declaraciones'; 


@Component({
  selector: 'app-filter-actividad',
  templateUrl: './filter-actividad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class FilterActividadComponent implements OnInit {
  @Output() resultFilters:EventEmitter<any> = new EventEmitter<any>();
  public filter:any = ['Opcion 1', 'Opción 2', 'Opción 3'];
   data="";
  constructor(
    private Declaraciones:Declaraciones
  		) {
  }

  ngOnInit() {
    console.log(this.filter)
    //this.filterActividades()
  }


  public filterActividades () {
      console.log('ejemplo')
     //return this.AppServices.getData("https://jsonplaceholder.typicode.com/comments?postId=2")
  }
  
  select(data){}
  

  
  
}
