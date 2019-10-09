import { Component, Injectable, Inject, Input, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.services';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public spinner: boolean;
  public displaySpinner: any;

  constructor(
    public utils: UtilsService,
    private router: Router


  ) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.utils.hideSideNav();
      }
    });


  }

  ngOnInit() {
    console.info("inicio app component");
  }


}
