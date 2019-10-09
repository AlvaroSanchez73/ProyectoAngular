import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.services';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Daf } from '../models/daf';
import { config } from 'src/environments/environment';

@Injectable()
export class Declaraciones {
  elementExist: boolean = false;
  elementRegist: Daf;
  public httpHeaders: any;
  public httpOptions: any;
  public displaySpinner: boolean;
  public apiURL = config.API_BASE_URL
  // + "/sycgenerico/1.0/api";
  

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    };
  }

  public visualizarDeclaracionesTabla(project, offset, limit) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // { 'Content-Type': 'application/json',
    //  'Accept': 'application/json', 
    //  'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' }
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.apiURL + "/declarations/obtenerDeclaraciones/" + project + "?offset="+offset+"&limit="+limit, httpOption);
  }


  public envioDaf(declaraciones: Array<Object>): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    let body = JSON.stringify(declaraciones);

    return this.http.post(this.apiURL + '/declarations/actualizarDeclaraciones', body, httpOption);

  }


  public descargarXls()  {
    var url = this.apiURL +'/xsl/declarations/exportarExcel'
    var a = document.createElement('a');
      a.href = url;
      a.download = 'nombre_archivo.xls';
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      return this.http.get(this.apiURL +'/xsl/declarations/exportarExcel') ;
  }


//  getActividadesPExcel(limit: number = null, page: number = null, condition: string = '') {
//     const pagination = (limit) ? '?limit=' + limit + '&page=' + page : '';

//     return this.http.get(ENV.BE_BASE_URL + ENV.BE_CONTEXT + '/actividades/' + this.conicytId + '/traeInfoExcel');
//   }


  updateData(url) {
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

  deleteData(url) {
    return this.http.delete(url, {

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
}
