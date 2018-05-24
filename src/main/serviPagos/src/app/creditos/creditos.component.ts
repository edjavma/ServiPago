import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CiudadanoService } from '../service/ciudadano.service';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

   @Input() dpi:any;
    persona:any;
    totales:any;
    credito:any;
    pago:any;

  constructor(private activeModal:NgbActiveModal, 
  	private ciudadanoService:CiudadanoService,
  	private consultaService:ConsultaService) { this.totales = {}; this.pago = {}; }


  ngOnInit() {
  	this.buscarPersona();
  }

  buscarPersona(){
  		this.consultaService.consultaDpi(this.dpi)
  		.subscribe(response => {
  			this.persona = response;
  			
  			this.totales.credito = 0;
  			this.totales.debito = 0;
  			this.totales.total = 0;
  			if(this.persona.data.creditos != undefined){
  				this.persona.data.creditos.forEach(res => {
  					if(res.montoAcreditado != undefined){
  						this.totales.credito = this.totales.credito + res.montoAcreditado;
  					}else if(res.montoDebitado != undefined){
  						this.totales.debito = this.totales.debito + res.montoDebitado;
  					}
  				});

  				this.totales.total = this.totales.credito - this.totales.debito;
  			}
  		}, error => {
  			alert('Error');
  		});
  	}

  	pagar(){
  		console.log(this.pago);
  		this.pago.dpi = this.dpi;
  		this.consultaService.debitarTarjeta(this.pago)
  		.subscribe(response => {
  			if(response.valid){
  				let credito:any = {};
  				credito.numeroPago = 1;
  				credito.montoAcreditado = parseInt(this.pago.monto);
  				credito.fechaRealizado = '23/05/2018';

  				if(this.persona.data.creditos != undefined && this.persona.data.creditos.length > 0){
  					this.persona.data.creditos.push(credito);
  				}else{
  					this.persona.data.creditos = new Array<any>();
  					this.persona.data.creditos.push(credito);
  				}
  				
  				this.ciudadanoService.crearCiudadano(this.persona)
  				.subscribe(response => {
  					alert(response.message);
  				}, error => {
  					alert(error);
  				});
  			}
  		}, error => {
  			alert(error);
  		});
  	}


  	crearCredito(){
  		console.log(this.credito);
  		console.log(this.persona);
  	}

}
