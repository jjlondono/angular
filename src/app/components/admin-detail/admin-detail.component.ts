import {Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Egresado } from '../../models/egresado';
import { EgresadoService } from '../../services/egresado.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
  providers: [UserService, EgresadoService]
})
export class AdminDetailComponent implements OnInit {
	public admin: User;
	public users: Array<User>;
	public ap;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _egresadoService: EgresadoService		
	){
		
		//this.token = this._userService.getToken();
		
	}

  ngOnInit() {
  	this.getAdmin();
  }

  getAdmin(){
  	this._route.params.subscribe(params => {
  		let id = +params['id'];

  		this._userService.getAdmin(id).subscribe(
  			response => {
  				if (response.status == 'success') {
  					this.admin = response.admin;
  					//this.ap = Array(this.admin);
  					console.log('puta'+ this.admin);
  					
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
