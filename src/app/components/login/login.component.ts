import { Component, OnInit, Input
 } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})
export class LoginComponent implements OnInit{
	public title: string;
	public user: User;
	public token;
	public identity;


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService

	){
		this.title = 'Iniciar sesion';
		this.user = this.user = new User(1, '', '', '', '', '', '', '', '', '', '', '', '');
	}
	ngOnInit(){
		console.log('login.component cargado ');
		this.logout();
	}

	onSubmit(form){
		console.log(this.user);

		this._userService.signup(this.user).subscribe(
			response => {
				//conseguir el token
				this.token = response;
				localStorage.setItem('token', this.token);

				//objeto usuario identificado
				this._userService.signup(this.user, true).subscribe(
					response => {						
						this.identity = response;
						localStorage.setItem('identity', JSON.stringify(this.identity));

						//redireccion
						this._router.navigate(['home']);

						const mapped = Array(this.user);

						console.log(mapped);						
					},
					error => {
						console.log(<any>error);
					}
				);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	logout(){
		this._route.params.subscribe(params => {
			let logout = +params['sure'];

			if (logout == 1) {
				localStorage.removeItem('identity');
				localStorage.removeItem('token');

				this.identity = null;
				this.token = null;

				//redireccion
				this._router.navigate(['home']);
			}
		});
	}
}