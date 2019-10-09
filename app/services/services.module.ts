import { NgModule } from '@angular/core';
import { AuthService } from './auth.services';
import { Declaraciones} from './declaraciones';
import { AppServices} from './app.services';
import { UtilsService } from './utils.services';
import { MatPaginatorIntlCro } from './paginatorInt.services';
import {MatPaginatorIntl} from '@angular/material';
import { ExcelService } from './excel.service';
import { Rendicion} from './rendicion';


@NgModule({
  providers: [AuthService, Declaraciones, Rendicion, UtilsService, ExcelService , AppServices, {provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
})
export class ServicesModule { }
