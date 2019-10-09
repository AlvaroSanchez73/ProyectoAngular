import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.services'; 
import { appConicyt } from 'src/app/app.conicytapp';

@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css','../sidenav/sidenav.component.css']
})
export class AppnavComponent implements OnInit {
  public appMenu:any;

  constructor(public utils:UtilsService) { 
  	this.appMenu = appConicyt
  }

  ngOnInit() {
  }

}
