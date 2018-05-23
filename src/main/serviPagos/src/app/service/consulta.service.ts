import { Injectable, Inject  } from '@angular/core';
import { Http,Response, Headers,RequestOptions,URLSearchParams } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../config/app-config.module';

@Injectable()
export class ConsultaService {

  public urlFindContador:string;

  constructor(private http:Http, @Inject(APP_CONFIG) private config: AppConfig) {
      this.urlFindContador = config.ENDPOINT+'/Webservice/agua/find';
  }

  consultaContador(contador:any){
  	let params = new URLSearchParams();
   	params.set('contador', contador);
   	return this.http.get(this.urlFindContador, {search:params})
   	.map(res => res.json());
  }

}
