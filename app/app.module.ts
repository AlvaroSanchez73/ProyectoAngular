import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';
import { WebStorageModule } from 'ngx-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './app.interceptor';
import { BehaviorSubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routing } from './app.routes';
import { AngularMaterialModule } from './app.material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';

import { ServicesModule } from './services/services.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './components/modals/form/form.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { ListActividadComponent } from './pages/actividad/list-actividad/list-actividad.component';
import { FilterActividadComponent } from './pages/actividad/filter-actividad/filter-actividad.component';
import { ActionsActividadComponent } from './pages/actividad/actions-actividad/actions-actividad.component';
import { FormActividadComponent } from './pages/actividad/form-actividad/form-actividad.component';
import { ParticipantesComponent } from './pages/actividad/participantes/participantes.component';
import { ConfirmarActividadComponent } from './pages/actividad/confirmar-actividad/confirmar-actividad.component';
import { AppnavComponent } from './components/appnav/appnav.component';
import { AlertsComponent } from './components/modals/alerts/alerts.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { EnviarDeclaracionesDafComponent } from './pages/declaracion-de-gastos/enviar-declaraciones-daf/enviar-declaraciones-daf.component';
import { FilterComponent } from './pages/declaracion-de-gastos/enviar-declaraciones-daf/filter/filter.component';
import { ResumenDeGirosComponent } from './pages/rendiciones/resumen-de-giros/resumen-de-giros.component';
import { FilterRendicionesComponent } from './pages/rendiciones/resumen-de-giros/filter-rendiciones/filter-rendiciones.component';
import { RevisarRendicionesComponent } from './pages/rendiciones/revisar-rendiciones/revisar-rendiciones.component';
import { DeclaracionBasicaComponent } from './pages/rendiciones/revisar-rendiciones/declaracion-basica/declaracion-basica.component';
import { PersonalComponent } from './pages/rendiciones/revisar-rendiciones/personal/personal.component';
import { PanelesComponent } from './pages/rendiciones/revisar-rendiciones/paneles/paneles.component';
//import { AccionesComponent } from './pages/actividad/acciones/acciones.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    SidenavComponent,
    MainComponent,
    HomeComponent,
    FormComponent,
    ActividadComponent,
    ListActividadComponent,
    FilterActividadComponent,
    FormActividadComponent,
    ParticipantesComponent,
    ConfirmarActividadComponent,
    AppnavComponent,
    AlertsComponent,
    NotificacionesComponent,
    ActionsActividadComponent,
    EnviarDeclaracionesDafComponent,
    FilterComponent,
    ResumenDeGirosComponent,
    FilterRendicionesComponent,
    RevisarRendicionesComponent,
    DeclaracionBasicaComponent,
    PersonalComponent,
    PanelesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebStorageModule,
    Routing,
    AngularMaterialModule,
    ServicesModule
  ],
  providers: [
  {
	  provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
   }   
  ],
  bootstrap: [AppComponent],
  entryComponents:[FormComponent, AlertsComponent]
})
export class AppModule { }
