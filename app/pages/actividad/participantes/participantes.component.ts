import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { FormComponent } from 'src/app/components/modals/form/form.component';
import { UtilsService } from 'src/app/services/utils.services';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css','../../home/home.component.css']
})
export class ParticipantesComponent implements OnInit {
  @Input() public displayButton:boolean = true;
  public displayedColumns: string[] = ['nombre', 'apellido', 'run', 'genero','email','telefono','establecimiento','tipoParticipante','acciones'];
  public dataSource = new MatTableDataSource<ParticipantesInterface>(ELEMENT_DATA);
  public filter:any = ['Opcion 1', 'Opción 2', 'Opción 3'];
  public loader:boolean = false;
  
  constructor(public dialog:MatDialog, public utils:UtilsService ) {

  }

  //@ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
  	this.dataSource.paginator = null //this.paginator;
  }

  openform(){
      let dialogConfirm = this.dialog.open(FormComponent, {
        width:'720px',
        disableClose: true 
      });

      return dialogConfirm.afterClosed();
   }

   loadFile(){
     document.getElementById("participantes").click()
   }

   fileChange(files:File[]){
     this.utils.mDialog("Ingreso de Participantes", "¿Está seguro de cargar 24 registros?","confirm").subscribe(res => {
       if(res){
         this.loader = true;
         setTimeout(() =>{
           this.loader = false;
           this.utils.message("Participantes Agregados Correctamente");
         },3000);

       }
     })
   }
}

export interface ParticipantesInterface {
  nombre: string;
  apellido: string;
  run: string;
  genero: string;
  email: string,
  telefono:string,
  establecimiento:string,
  tipoParticipante:string
}

const ELEMENT_DATA: ParticipantesInterface[] = [
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},
{
  nombre: 'Jaime',
  apellido: 'Canales',
  run: '13.666.111-K',
  genero: 'Masculino',
  email: 'jcava@gmail.com',
  telefono:'999661215',
  establecimiento:'Liceo Alexander Fleming',
  tipoParticipante:'Docente'
},

];