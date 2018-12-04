import {Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Egresado } from '../../models/egresado';
import { EgresadoService } from '../../services/egresado.service';


@Component({
	selector:'default',
	templateUrl: './default.component.html',
	providers: [UserService, EgresadoService]
})
export class DefaultComponent implements OnInit{
	public title: string;
	public egresados: Array<Egresado>;
	public users: Array<User>;
	public token;
	public identity;
	public mapped;
	public user: User;
	public admin;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _egresadoService: EgresadoService		
	){
		this.title = 'Inicio';
		this.token = this._userService.getToken();
		
	}

	ngOnInit(){
		console.log('default.component cargado correctamente');
		this.getEgresados();
		//this.getAdmin();
		this.getAdmins();
		
	}

	//listado administradores
	getAdmin(){
		this._userService.getAdmins().subscribe(
			response => {
				console.log('mierda'+response);
				if (response.status == 'success') {
					this.users = response.users;					
				}					
				
			},
			error => {
				console.log(error);
			}
		);
	}

	getEgresados(){
		this._egresadoService.getEgresados().subscribe(
			response => {
				console.log(response);
				
				if (response.status == 'success') {
					this.egresados = response.egresados;
					this.identity = this._userService.getIdentity();
					this.mapped = Array(this.identity);
					
				}
			},
			error => {
				console.log(error);
			}
		);
	}

	getAdmins(){
		this._userService.getAdmins().subscribe(
			response => {
				console.log(response);
				
				if (response.status == 'success') {
					this.users = response.users;					
				}
			},
			error => {
				console.log(error);
			}
		);
	}

	//eliminar un egresado
	deleteEgresado(id){
		this._egresadoService.delete(this.token, id).subscribe(
			response => {
				//this._router.navigate['home'];
				this.getEgresados();
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	

	//eliminar un administrador
	deleteAdmin(id){
		this._userService.delete(this.token, id).subscribe(
			response => {
				//this._router.navigate['home'];
				this.getAdmins();
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}