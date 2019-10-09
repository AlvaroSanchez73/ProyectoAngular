import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
import { Location } from '@angular/common';
import { interval } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  User: string;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private location: Location,
    public utils: UtilsService
  ) {

  }
  
  ngOnInit() {
    this.checkAuth();
  }
	
  ngOnChanges() {
    this.checkAuth();
  }
  

  checkAuth() {
    if (this.location.path() != '/callback') {
      if (this.AuthService.isAuth()) {
        let UserData = this.AuthService.getUserInfo();
        this.utils.displayNavbar = true;
        this.User = UserData['primerNombre'] + " " + UserData['primerApellido'];
      } else {
        this.AuthService.removeAuthInfo();
        this.router.navigate(['/main']);
      }
    }
  }

  logout() {
    this.AuthService.logout();
  }

}
