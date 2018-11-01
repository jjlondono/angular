import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
	public title: string;
	public user: User;

	constructor(
		
	){
		this.title = 'Iniciar sesion';
		this.user = this.user = new User(1, '', '', '', '', '');
	}
	ngOnInit(){
		console.log('login.component cargado ');
	}

	onSubmit(form){
		console.log(this.user);
	}
}