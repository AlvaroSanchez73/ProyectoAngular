import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private AuthService: AuthService,
    private router: Router,
    private utils: UtilsService) { }

  ngOnInit() {
    console.log("inicia main");
    //this.utils.displayNavbar = false;
  }

  login() {
    console.log("login");
    if (this.AuthService.isAuth()) {
      let UserData = this.AuthService.getUserInfo();
      this.utils.displayNavbar = true;
      this.router.navigate(['/home']);

    } else {
      location.href = this.AuthService.getLoginUrl();

    }
  }

}
