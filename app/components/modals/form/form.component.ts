import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public filter:any = ['Opcion 1', 'Opción 2', 'Opción 3'];
  public checkedRBD:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
