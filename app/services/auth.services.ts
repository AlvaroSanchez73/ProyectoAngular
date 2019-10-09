import { Injectable } from '@angular/core';
import { CookiesStorageService, CookieStorage } from 'ngx-store';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/environments/environment';
import { CanActivate, Router } from '@angular/router';

let cookieConfig:any = {key: 'conicyt.auth', expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)};

export interface SessionInterface{
  access_token: string,
  jwt: string,
  token_type: string,
  session_state: string,
  expires_in: number,
  last_request: any,
}

export interface OIDCData{
  output: any,
  status: number,
  error: string
}

@Injectable()
export class AuthService implements CanActivate {

  public cookiesStorageService: any;
  public dataSession: any = {};

  @CookieStorage(cookieConfig) cookieSession:SessionInterface;

  constructor(
      cookiesStorageService: CookiesStorageService,
      public router: Router,
      public http: HttpClient
      ) {

      this.cookiesStorageService = cookiesStorageService;
  }

  setAuth(jsonCookie: any){
      this.cookieSession = jsonCookie;
  }

  getAppSettings(){
    return config;
  }

  getLoginUrl(){
    return config.ID_BASE_URL + "/oauth2/authorize?scope=openid&response_type=id_token token&nonce=123&redirect_uri=" +
            encodeURIComponent(config.OAUTH2_CALLBACK_URL) + "&client_id=" + config.OAUTH2_CLIENT_ID;
  }

  getLogoutUrl(){
    return config.ID_BASE_URL + "/coni/logout?debug=true&session_change_redirect_uri=" + encodeURIComponent(config.FRONTEND_BASE_URL);
  }

  logout(){
    this.removeAuthInfo();
    location.href = this.getLogoutUrl();
  }

  getAuthInfo(){
    let session = {};
    this.cookiesStorageService.utility.forEach((value, key) => session = value);
    this.dataSession = session; 
    return this.dataSession;
  }

  getAuthInfoBy(key){
    let obj = this.getAuthInfo();
    let res = (obj[key] && obj[key] != null && obj[key] != undefined && obj[key] != "") ? obj[key] : null;
    return res;
  }

  removeAuthInfo(){
    this.cookiesStorageService.clear("all");
    this.dataSession = {};
  }

  isAuth(){
    //return true;

   let isAuth:boolean = true;
    let credentials:any = this.getAuthInfo();
    let auth_params = Object.keys(credentials);
    let requireParams = ['access_token', 'jwt', 'token_type', 'expires_in', 'session_state','last_request'];
    let matchRequired = false;

    if(auth_params.length == 0){
      isAuth = false;
    }else{

      Object.keys(credentials).forEach(key => {
        requireParams.forEach(keyReq => {
          if(key == keyReq){ matchRequired = true; }
        }); 
        
        if(this.getAuthInfoBy(key) == null || !matchRequired){
          isAuth = false;
          return false;
        }
      });
    }

    return isAuth;
  }

  getUserInfo(){
    const helper = new JwtHelperService();
    let data = helper.decodeToken( this.getAuthInfo()['jwt'] );
    return {
      primerNombre: data.conicytIDPrimerNombre,
      primerApellido: data.conicytIDPrimerApellido,
      nombreCompleto: data.conicytIDNombreCompleto,
      perconaId: data.conicytIDPerconaID,
      email: data.conicytIDEmail,
      roles: data.conicytIDRoles.split(","),
      pais: data.conicytIDPais,
      access_token: this.getAuthInfo()['access_token']
    }
  }

  refreshToken(){
    if(this.getAuthInfo()){
      let now = new Date();
      let lastR = new Date(this.getAuthInfoBy('last_request'));
      let perconaID = this.getUserInfo()['perconaId'];
      let scope = config.APP_NAME + "_" + perconaID;
      let token = this.getAuthInfoBy('access_token');

      if( (now.getTime() - lastR.getTime()) >= (30)*1000 ){
         this.http.get<OIDCData>(config.API_BASE_URL + "/be/oidc/1.0/gettoken?typerequest=refreshtoken&refresh_token=" + token + "&scope=" + scope).subscribe( data=> {
           if(data.status == 200){
             let moment = new Date();
             let jsonCookie = this.cookieSession
             jsonCookie.access_token = data.output.access_token;
             jsonCookie.expires_in = data.output.expires_in;
             jsonCookie.last_request = new Date(); 
             this.cookiesStorageService.clear("all");
             this.setAuth(jsonCookie);
             console.log(this.getAuthInfo());
             console.log("Refresh Token Updated!");
           }else{
             console.log("No refresh token Updated! | Requested Completed!")
           }
         }, err => {
           console.log("Server Error 500 Found!");
         })
      }else{
        console.log('No Time for Refresh Token');
      }
    }
  }
  
  verifyRoles (roles: any) {
	
	    let countVerify = 0;		
	    roles.forEach((iVal, iIdx) => {
	      this.getUserInfo().roles.forEach((tVal, tIdx) => {
	        if (iVal === tVal) { countVerify++; }

			});
	
	   });
	
	    return (countVerify > 0) ? true : false;
	
	  }
  
    getUserName() {
      const UserData = this.getUserInfo();
      return (UserData['primerNombre']) ? 'Hola, ' + UserData['primerNombre']
       + ' ' + UserData['primerApellido'] : '';
    }
    
  canActivate(): boolean {
    if (!this.isAuth()) {
      this.router.navigate(['main']);
      this.removeAuthInfo()
      return false;
    }
    return true;
  }

}
