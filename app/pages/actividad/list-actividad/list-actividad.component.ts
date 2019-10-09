import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AuthService } from 'src/app/services/auth.services';
import { Declaraciones } from 'src/app/services/declaraciones'; 
import { FilterActividadComponent } from './../filter-actividad/filter-actividad.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-list-actividad',
  templateUrl: './list-actividad.component.html',
  styleUrls: ['../../../app.component.css']
})

export class ListActividadComponent implements OnInit {
  @ViewChild(FilterActividadComponent, {static: true}) childOne;
  public displayedColumns: string[] = ['postId','id', 'name', 'email', 'body','acciones'];
  public dataSource:any  = [];

  constructor(
  		private AuthService:AuthService,
  		private Declaraciones:Declaraciones
  		) {
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() : void {
      console.log('ejemplo')
//      this.AppServices.getData("https://jsonplaceholder.typicode.com/posts/1/comments", []).subscribe( 
//        (result) =>
//          {
//            this.dataSource = new MatTableDataSource<ElementList>(<any> result);
//            this.dataSource.paginator = this.paginator
//            console.log(this.dataSource.paginator)
//          },
//        (error) => 
//          {
//            var errorMessage:any= error;
//            console.log(errorMessage);
//          }
//      )
//    this.dataSource.paginator = this.paginator;

  }

  changeEmit(){

    this.childOne.filter().subscribe( 
      (result) =>
        {
          this.dataSource = new MatTableDataSource<ElementList>(<any> result);
          this.dataSource.paginator = this.paginator;
        },
      (error) => 
        {
          var errorMessage:any= error;
          console.log(errorMessage);
        }
    )
  }

}

export interface ElementList {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  acciones: string;
}