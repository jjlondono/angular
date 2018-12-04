import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Egresado } from '../../models/egresado';
import { EgresadoService } from '../../services/egresado.service';

@Component({
  selector: 'app-egresado-detail',
  templateUrl: './egresado-detail.component.html',
  providers: [UserService, EgresadoService]
})
export class EgresadoDetailComponent implements OnInit {
	public egresado: Egresado;

  constructor(  
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _egresadoService: EgresadoService
  ){

  }

  ngOnInit() {
  	this.getEgresado();
  }

  getEgresado(){
  	this._route.params.subscribe(params => {
  		let id = +params['id'];

  		this._egresadoService.getEgresado(id).subscribe(
  			response => {
  				if (response.status == 'success') {
  					this.egresado = response.egresado;
  				}else {
  					this._router.navigate(['inicio']);
  				}
  			},
  			error => {
  				console.log(<any>error);
  			}
  		);
  	});
  }

}

