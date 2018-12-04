import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { EgresadoService } from '../../services/egresado.service';
import { Egresado } from '../../models/egresado';


@Component({
  selector: 'app-egresado-new',
  templateUrl: './egresado-new.component.html',
  styleUrls: ['./egresado-new.component.css'],
  providers: [UserService, EgresadoService]
})
export class EgresadoNewComponent implements OnInit {
	public page_title: string;
	public identity;
	public token;
	public egresado: Egresado;
	public status_egresado: string;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _egresadoService: EgresadoService	
  ){
  		this.page_title = 'Crear nuevo egresado';
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  }

  ngOnInit() {
  	if(this.identity == null){
  		this._router.navigate(["/login"]);
  	}else{
  		//crear objeto egresado
  		this.egresado = new Egresado(1, '', '', '','','','','','',null,null);
  	}
  }

  onSubmit(form){
  	this._egresadoService.create(this.token, this.egresado).subscribe(
  		response => {
  			
        if (response.status == 'success') {
             this.egresado = response.egresado;
             this.status_egresado = 'success';
             this._router.navigate(['/home']);
        }else{
            this.status_egresado = 'error';
        }
  			
  		},
  		error => {
  			console.log(<any>error);
  			this.status_egresado = 'error';
  		}
  	);
  }

}
