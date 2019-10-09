import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormActividadComponent } from './form-actividad/form-actividad.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Declaraciones } from 'src/app/services/declaraciones';
import { ElementList } from './list-actividad/list-actividad.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css', '../../app.component.css']
})
export class ActividadComponent implements OnInit {

    //@ViewChild('formActividad') childOne:FormActividadComponent;
    public isRUN:boolean;
    
  data: any;
  constructor(private Declaraciones:Declaraciones) { }

  ngOnInit() {
     // this.childOne.issR.subscribe(res => { this.isRUN = res });
  }
// create(data: Data){
//   this.AppServices.postData('https://jsonplaceholder.typicode.com/posts').subscribe(
//     (response)=>{
//       console.log(response)
//     //this.data = new MatTableDataSource<ElementList>(<any> response);
//     //console.log('response from post data is ', data);
//   },(error)=>{
//     console.log('error during post is ', error)
//   })
//  }

	update(){}

//  update(data: Data){
//   this.AppServices.updateData('https://jsonplaceholder.typicode.com/posts/100').subscribe(
//     (response)=>{
//       console.log(response)
//       console.log('elemento actualizado')
//   },(error)=>{
//     console.log('error al actualizar ', error)
//   })
//  }

// delete(){
//   this.AppServices.deleteData('https://jsonplaceholder.typicode.com/posts/1').subscribe(
//     (response)=>{
//       console.log(response)
//       console.log('elemento eliminado')

//     //this.data = new MatTableDataSource<ElementList>(<any> response);
//     //console.log('response from post data is ', data);
//   },(error)=>{
//     console.log('error al eliminar ', error)
//   })
//  }
// }
}
export interface Data {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  acciones: string;
}
