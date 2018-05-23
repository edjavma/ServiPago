import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from '../servicios/servicios.component';
import { AguaComponent } from '../agua/agua.component';
import { BoletoComponent } from '../boleto/boleto.component';
import { MultasComponent } from '../multas/multas.component';
import { IusiComponent } from '../iusi/iusi.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/servicios', pathMatch: 'full' }   
  ,{ path: 'servicios', component: ServiciosComponent } 
  ,{ path: 'agua', component: AguaComponent } 
  ,{ path: 'boleto', component: BoletoComponent } 
  ,{ path: 'multas', component: MultasComponent } 
  ,{ path: 'iusi', component: IusiComponent } 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
