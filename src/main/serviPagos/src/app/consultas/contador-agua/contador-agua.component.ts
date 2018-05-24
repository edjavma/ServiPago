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
	persona:any;


  constructor(private consultaService:ConsultaService,private ciudadanoService:CiudadanoService) { this.contadores = new Array<any>();}

  ngOnInit() {
  	this.buscarContadores();
  }

  	buscarContadores(){
  		this.consultaService.consultaDpi(this.dpi)
  		.subscribe(response => {
  			this.persona = response;
  			let servicios = this.persona.data.servicio.filter(res => res.codigoServicio == this.servicio.codigoServicio);  			
  			if(servicios.length > 0){
  				this.contadores = servicios[0].contadores; 
  			}  			
  		}, error => {
  			alert('Error');
  		});
  	}

	consultar(){	  	
	  	this.consultaService.consultaContador(this.contador)
	  	.subscribe(response => {
	  		this.result = response;
	  	}, error => {
	  		alert('No se encontro el contrador que esta buscando.');
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

	  	this.ciudadanoService.crearCiudadano(ciudadano)
	  	.subscribe(response => {
	  		alert(response.message);
	  	}, error => {
	  		alert(error);
	  	});
	  }
}
