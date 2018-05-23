import { BrowserModule} from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './config/app-routing.module';
import { AppConfigModule } from './config/app-config.module';

import {DropdownModule} from 'primeng/dropdown';

import { CiudadanoService } from './service/ciudadano.service';
import { ConsultaService } from './service/consulta.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AguaComponent } from './agua/agua.component';
import { BoletoComponent } from './boleto/boleto.component';
import { MultasComponent } from './multas/multas.component';
import { IusiComponent } from './iusi/iusi.component';
import { AsociarComponent } from './asociar/asociar.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ContadorAguaComponent } from './consultas/contador-agua/contador-agua.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeadComponent,
    ContentComponent,
    ServiciosComponent,
    AguaComponent,
    BoletoComponent,
    MultasComponent,
    IusiComponent,
    AsociarComponent,
    ConsultasComponent,
    ContadorAguaComponent
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AppConfigModule
  ],
  entryComponents: [AsociarComponent],
  providers: [CiudadanoService,ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
