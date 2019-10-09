import { Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { AuthService } from './services/auth.services';
import { EnviarDeclaracionesDafComponent } from './pages/declaracion-de-gastos/enviar-declaraciones-daf/enviar-declaraciones-daf.component';
import { ResumenDeGirosComponent } from './pages/rendiciones/resumen-de-giros/resumen-de-giros.component';
import { RevisarRendicionesComponent } from './pages/rendiciones/revisar-rendiciones/revisar-rendiciones.component';



const APP_ROUTES: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthService] },
  { path: 'declaraciones-de-gastos',
      children:[
        {
          path: 'enviar-declaraciones-daf', 
          component: EnviarDeclaracionesDafComponent, canActivate:[AuthService]
        }
      ]
  },
  { path: 'rendiciones', 
      children:[
            {
              path: 'resumen-de-giros', 
              component:  ResumenDeGirosComponent, canActivate:[AuthService]
            },
            {
              path: 'revisar-rendiciones', 
              component:  RevisarRendicionesComponent, canActivate:[AuthService]
            }

      ]
  },
  { path: 'notificaciones', component: NotificacionesComponent, canActivate:[AuthService] },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES,  { useHash: false });
