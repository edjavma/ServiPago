import { Component, OnInit } from '@angular/core';
import { CiudadanoService } from '../service/ciudadano.service';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AsociarComponent } from '../asociar/asociar.component';
import { CreditosComponent } from '../creditos/creditos.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

	ciudadano:any;
  constructor(private ciudadanoService:CiudadanoService,private modalService: NgbModal) { this.ciudadano = {}}

  ngOnInit() {
  }


  read(){
  	this.ciudadanoService.consultaDpi(0)
  	.subscribe(response => {
  		console.log(response);  		
  		this.ciudadano = response;
  		this.ciudadano.photo = 'data:image/jpg;base64,'+this.ciudadano.photo;
  	}, error => {
  		alert(error);
  	});
  }

  addService(){
    let options: NgbModalOptions = {  size: 'lg' };

      const modalRef = this.modalService.open(AsociarComponent,options);
      modalRef.componentInstance.dpi=this.ciudadano.cui;
      modalRef.result.then((result) =>{                        
                        
                    }, (reason) => {
                           console.log(reason);
                    });
  }

  creditosService(){
    let options: NgbModalOptions = {  size: 'lg' };

      const modalRef = this.modalService.open(CreditosComponent,options);
      modalRef.componentInstance.dpi=this.ciudadano.cui;
      modalRef.result.then((result) =>{                        
                        
                    }, (reason) => {
                           console.log(reason);
                    });
  }
}
