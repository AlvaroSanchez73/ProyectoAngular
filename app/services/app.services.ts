import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AuthService } from './auth.services';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { config } from 'src/environments/environment';
import { ElementList } from '../models/element-list';

@Injectable()
export class AppServices {
   elementExist: boolean = false;
   elementRegist: ElementList;
  public httpHeaders:any;
  public httpOptions:any;
  public displaySpinner:boolean;
  public apiURL = 'http://0bc8bf9d.ngrok.io/api';
  public conicytId: number;
  public httpOptionsFile: any;	
  public HttpAuth: any;

  constructor(private http:HttpClient) {
  	this.httpOptions = {
  	  headers: new HttpHeaders({
  	    'content-type': 'application/json',
  	  })
	  };
  }

  

  public getData(url) {

  let headers = new HttpHeaders().set('Content-Type','application/json');
   
  // { 'Content-Type': 'application/json',
  //  'Accept': 'application/json', 
  //  'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' }
    const httpOption = {
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Accept': 'application/json'})
     };

    return this.http.get(this.apiURL + url, httpOption);
  }

// postData(){
//     this.http.post("http://localhost/api1/", {'dato': 'eduardd'}, this.httpOptions).subscribe( (data) =>{
//       console.log("posted");
//     })
//   }

public postdata(report_number: string, project: string, start_date: string, 
                end_date: string, duration: string, Declaraciones: string, 
                enviar: string, total_approved: number, amount: number, envioDaf: string, 
                programa: string, daf: string): Observable<any>{
  const httpOption = {
    headers : new HttpHeaders({
      'content-type': 'application/json'})
  }
  let body = JSON.stringify({report_number: report_number, project: project, 
                            start_date: start_date, end_date: end_date,
                            duration: duration, Declaraciones: Declaraciones, enviar: enviar, 
                            total_approved: total_approved, amount: amount, envioDaf: envioDaf, 
                            programa: programa, daf: daf});

  return this.http.post(this.apiURL+'/declarations/guardarDafs' ,body ,httpOption);
}


getExtraRoles(conicytId: number, access_token: string) {
	
	    if (this.conicytId === undefined) {	
	      this.conicytId = conicytId;
	
	    }
	    this.HttpAuth = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + access_token }) };
	    return this.http.get(config.API_BASE_URL + '/rawcuantificaciones1000ca/1.0/obtenerAdministrador?conicytId=' + conicytId, this.HttpAuth);
	
	  }


  
  updateData(url){
    console.log(url)
    return this.http.put(url, {
      body: JSON.stringify({
        postId: 100,
        Id: 501,
        name: "asd fugit eligendi deleniti quidem qui sint nihil autem",
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
  
deleteData(url){
  console.log(url)
  return this.http.delete(url, {
    
    headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
   })
  }
}
