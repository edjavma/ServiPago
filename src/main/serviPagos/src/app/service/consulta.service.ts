import { Injectable, Inject  } from '@angular/core';
import { Http,Response, Headers,RequestOptions,URLSearchParams } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../config/app-config.module';

@Injectable()
export class ConsultaService {

  public urlFindContador:string;
  public urlPagarTarjeta:string;
  public urlFindDpi:string;

  constructor(private http:Http, @Inject(APP_CONFIG) private config: AppConfig) {
      this.urlFindContador = config.ENDPOINT+'/Webservice/agua/find';
      this.urlFindDpi = config.ENDPOINT+'/Servicios/ciudadano/find/dpi';
      this.urlPagarTarjeta = config.ENDPOINT+'/Webservice/tarjeta/debitar';
  }

  consultaContador(contador:any){
  	let params = new URLSearchParams();
   	params.set('contador', contador);
   	return this.http.get(this.urlFindContador, {search:params})
   	.map(res => res.json());
  }

  consultaDpi(dpi:any){
    let params = new URLSearchParams();
     params.set('dpi', dpi);
     return this.http.get(this.urlFindDpi, {search:params})
     .map(res => res.json());
  }

  debitarTarjeta(data:any){
      let headers = new Headers();
     return this.http.post(this.urlPagarTarjeta, data, {headers: headers})
     .map(res => res.json()); 
  }

}
