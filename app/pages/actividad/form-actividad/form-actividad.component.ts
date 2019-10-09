import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UtilsService } from 'src/app/services/utils.services'

@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class FormActividadComponent implements OnInit {
	
  @Output() issR:EventEmitter<boolean> = new EventEmitter();

  public actividad= new FormGroup({
    ID: new FormControl(null),
    nombre:  new FormControl('',Validators.required),
    concurso:new FormControl('',Validators.required),
    categoria:      new FormControl('', Validators.required),
    tipoActividad:   new FormControl('', Validators.email),
    tipoInscripcion:   new FormControl(true),
    fecha:new FormControl(''),
    espacio:new FormControl(''),
    publico:new FormControl(''),
    cantidadMasculino:new FormControl(''),
    cantidadFemenino:new FormControl('')
  })
  	
    public filter:any = ['opción 1', 'opción 2', 'opción 3'];
    public opcionesInscripcion:any = [{tipo:'CON RUN', value:true},{tipo:'SIN RUN', value:false}];
    public cFem:number = 0;
    public cMas:number = 0;
    public doc:any;
    public antecedFiles:any = [];

  constructor(public utils:UtilsService) {

   }

  ngOnInit() {
  	 this.changeRUN(true);
  }

  changeRUN(index:boolean):void{
  	console.log(index);
	  this.issR.emit(index);
  }

  openInputFile(){
   document.getElementById("antecedentes").click()
  }

  fileChange(files: File[]){

    Object.keys(files).forEach(a =>{
      this.antecedFiles.push(
      {
         name:files[a]['name'],
         size:Math.round((files[a]['size']/1000000) * 100)/100 + "MB" 
      }
      )
    });

    this.utils.message("Archivos cargados correctamente");
  }

  removeFile(index:number){
    this.antecedFiles.splice(index, 1);
    this.utils.message("Archivo removido correctamente");
  }
}
