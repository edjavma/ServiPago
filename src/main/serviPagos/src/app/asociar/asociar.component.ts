import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CiudadanoService } from '../service/ciudadano.service';

@Component({
  selector: 'app-asociar',
  templateUrl: './asociar.component.html',
  styleUrls: ['./asociar.component.css']
})
export class AsociarComponent implements OnInit {

  @Input() dpi:any;
	servicios:Array<any>;
  servicioSelected:any;

  constructor(private activeModal:NgbActiveModal, private ciudadanoService:CiudadanoService) { this.servicioSelected = {}; }

  ngOnInit() {
  	this.getServicios();
  }

  getServicios(){
    console.log(this.dpi);
  	this.ciudadanoService.getServicios()
  	.subscribe(response => {
  		this.servicios = response;
  		console.log(response);
  	}, error => {
  		alert(error);
  	});
  }

  test(){
    console.log(this.servicioSelected);
  }

}
