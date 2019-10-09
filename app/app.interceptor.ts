import 'rxjs/add/operator/do';
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { catchError, tap } from "rxjs/internal/operators";
import { AuthService } from './services/auth.services';
import { Declaraciones } from './services/declaraciones';

 
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(public auth: AuthService, public router:Router, public declaraciones:Declaraciones) 
   {  

   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("token:"+this.auth.getAuthInfoBy('access_token'))                                                                              
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + this.auth.getAuthInfoBy('access_token')
      }
    });
    
     return next.handle(request).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {            }
          }, error => {
               if(error.status == 0 || error.status == 401){
                //this._utils.mDialog("Notificación", "Su sesión ha terminado. Vuelva a iniciar sesión.", "message");
                //Hace akgi
              }
          })
        );

  }

}

