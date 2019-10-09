import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/services/auth.services';
import { Declaraciones } from 'src/app/services/declaraciones';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'SISTEMA SEGUIMIENTO Y CONTROL';
  public isDefault: boolean=false;
  public isAnalistaCuentas: boolean=false;
  public isEncargadoFinanzas: boolean=false;
  public isAnalistaCuentasFinanzas: boolean=false;
  public isEncargadoRendicionCuentas: boolean=false;
  public isAdministrador: boolean=false;
  public isConsulta: boolean=false;
  public isAnalistadeCuentasSSC: boolean=false;
  public isEncargadodeFinanzasSSC: boolean=false;
  public isAnalistadeCuentasFinanzasSSC: boolean=false;
  public isEncargadoRendiciondeCuentasSSC: boolean=false;

  constructor(
    private AuthService: AuthService,
  ) {
  }

  ngOnInit() {
    //console.info(this.AuthService.verifyRoles(["AnalistadeCuentasFinanzasSistemaSeguimientoyControl"]));
    console.info(this.AuthService.getUserInfo().roles);
    var roles = this.AuthService.getUserInfo().roles;
    for (var rol = 0; rol < roles.length; rol++) {
      if (roles[rol] == "Default") {
        this.isDefault = true;
      }
      if (roles[rol] == "#analistaCuentas#seguimiento#FONDEF") {
        this.isAnalistaCuentas = true;
        return JSON.stringify({
            perfil: "AnalistaCuentas",
            rendiciones: ["Resumen de Giros","Rendiciones por Aprobacion"],
            });
      }
      if (roles[rol] == "#encargadoFinanzas#seguimiento#FONDEF") {
        this.isEncargadoFinanzas = true;
        return JSON.stringify({
          perfil: "EncargadoFinanzas",
          rendiciones: ["Resumen de Giros","Rendiciones por Aprobacion"],
          });
      }
      if (roles[rol] == "#analistaCuentasFinanzas#seguimiento#FONDEF") {
        this.isAnalistaCuentasFinanzas = true;
      }
      if (roles[rol] == "#encargadoRendicionCuentas#seguimiento#FONDEF") {
        this.isEncargadoRendicionCuentas = true;
      }
      if (roles[rol] == "#administrador#seguimiento#FONDEF") {
        this.isAdministrador = true;
        return JSON.stringify({
          perfil: "Administrador",
          rendiciones: ["Resumen de Giros","Rendiciones por Aprobacion"],
          declaraciones: ["Revizar Declaracion Vigente","Modificar Documentos Declarados Cerrados","Enviar Declaraciones DAF"]
          });
      }
      if (roles[rol] == "#consulta#seguimiento#FONDEF") {
        this.isConsulta = true;
      }
      if (roles[rol] == "AnalistadeCuentasSistemaSeguimientoyControl") {
        this.isAnalistadeCuentasSSC = true;
      }
      if (roles[rol] == "EncargadodeFinanzasSistemaSeguimientoyControl") {
        this.isEncargadodeFinanzasSSC = true;
      }
      if (roles[rol] == "AnalistadeCuentasFinanzasSistemaSeguimientoyControl") {
        this.isAnalistadeCuentasFinanzasSSC = true;
      }
      if (roles[rol] == "EncargadoRendiciondeCuentasSistemaSeguimientoyControl") {
        this.isEncargadoRendiciondeCuentasSSC = true;
      }
    }
    // this.AppServices.getData().subscribe( 
    //   (result) =>
    //     {
    //       this.dataSource = result;
    //     },
    //   (error) => 
    //     {
    //       var errorMessage:any= error;
    //       console.log(errorMessage);
    //     }
    // )
  }

}
