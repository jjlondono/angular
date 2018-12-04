import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	providers: [UserService]
})
export class RegisterComponent implements OnInit{
	public title: string;
	public user: User;
	public status: string;

	constructor(
		private _rout: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Registrar un adminstrador';
		this.user = new User(1, '', '', '', '', '', '', '','', '', '', '', '');
	}
	ngOnInit(){
		console.log('register.component cargado ');
	}

	onSubmit(form){
		//console.log(this.user);
		//console.log(this._userService.pruebas());
		this._userService.register(this.user).subscribe(
			response => {
				this.status = response.status;
				if (response.status == 'success') {
					this.status = response.status;

					//vaciar el formulario
					this.user = new User(1, '', '', '', '', '', '', '', '', '', '', '', '');
					form.reset();
					this._router.navigate(['/home']);

				}else{
					this.status = 'error';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}


}