import { Injectable, Inject  } from '@angular/core';
import { Http,Response, Headers,RequestOptions,URLSearchParams } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../config/app-config.module';

@Injectable()
export class CiudadanoService {

  	public urlConsultarDpi:string;
  	public urlConsultarTerminales:string;

    public urlCiudadanosGET:string;
    public urlCiudadanoPOST:string;
    public urlCiudadanoSearch:string;
    public urlServicios:string;

  constructor(private http:Http, @Inject(APP_CONFIG) private config: AppConfig) {
      this.urlCiudadanosGET = config.ENDPOINT+'/Servicios/ciudadano/listar';
      this.urlCiudadanoPOST = config.ENDPOINT+'/Servicios/ciudadano/crear';
      this.urlCiudadanoSearch = config.ENDPOINT+'/Servicios/ciudadano/find';
      this.urlServicios = config.ENDPOINT+'/Servicios/ciudadano/servicios'


      this.urlConsultarDpi = config.ENDPOINT+'/Servicios/dpi/read';
      this.urlConsultarTerminales = config.ENDPOINT+'/Servicios/dpi/list/terminals';
   }

   getServicios(){
     return this.http.get(this.urlServicios)
     .map(res => res.json());
   }

   consultaDpi(terminal:any){
   	let params = new URLSearchParams();
   	params.set('terminal', terminal);
   	return this.http.get(this.urlConsultarDpi, {search:params})
   	.map(res => res.json());
   }

   getTerminales(){
     return this.http.get(this.urlConsultarTerminales)
     .map(res => res.json());
   }

   getCiudadanos(){
     return this.http.get(this.urlCiudadanosGET)
     .map(res => res.json());
   }

   crearCiudadano(ciudadano:any){     
     let headers = new Headers();     
     return this.http.post(this.urlCiudadanoPOST, ciudadano, {headers:headers})
     .map(res => res.json());
   }


   findCiudadano(data:any){ 
     let params = new URLSearchParams();
     params.set('data',JSON.stringify(data));    
     let headers = new Headers(); 
     headers.append("Content-Type","application/x-www-form-urlencoded");
     return this.http.post(this.urlCiudadanoSearch, params, {headers:headers})
     .map(res => res.json());
   }

}
