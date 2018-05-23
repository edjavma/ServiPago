import { Component, OnInit, Input } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { CiudadanoService } from '../../service/ciudadano.service';

@Component({
  selector: 'app-contador-agua',
  templateUrl: './contador-agua.component.html',
  styleUrls: ['./contador-agua.component.css']
})
export class ContadorAguaComponent implements OnInit {

	@Input() dpi:any;
	@Input() servicio:any;
	contador:any;
	contadores:Array<any>;
	result:any;


  constructor(private consultaService:ConsultaService,private ciudadanoService:CiudadanoService) { this.contadores = new Array<any>();}

  ngOnInit() {
  }

	consultar(){	  	
	  	this.consultaService.consultaContador(this.contador)
	  	.subscribe(response => {
	  		console.log(response);
	  		this.result = response;
	  	}, error => {
	  		alert(error);
	  	});
	  }

	  addContador(){
	  	let contador = this.contadores.filter(res => res.contador == this.contador);
	  	if(contador.length == 0){
	  		this.contadores.push({contador:this.contador});	
	  	}
	  	this.result = {};
	  	
	  }

	  asociar(){
	  	let data:any = {};
	  	data.servicio = new Array<any>();
	  	//data.servicio.contadores = new Array<any>();
	  	this.servicio.contadores = this.contadores;

	  	data.servicio.push(this.servicio);
	  	let ciudadano:any = {};
	  	ciudadano.dpi = this.dpi;
	  	ciudadano.data = data;

	  	console.log(ciudadano);
	  	this.ciudadanoService.crearCiudadano(ciudadano)
	  	.subscribe(response => {
	  		alert(response.message);
	  	}, error => {
	  		alert(error);
	  	});
	  }
}
