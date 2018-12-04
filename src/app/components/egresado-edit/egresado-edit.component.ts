import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Egresado } from '../../models/egresado';
import { EgresadoService } from '../../services/egresado.service';


@Component({
  selector: 'app-egresado-edit',
  templateUrl: '../egresado-new/egresado-new.component.html', 
  providers: [UserService, EgresadoService]
})
export class EgresadoEditComponent implements OnInit {
  public page_title: string;
	public egresado: Egresado;
  public token;
  public status_egresado;

  constructor(  
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _egresadoService: EgresadoService
  ){
      this.token = this._userService.getToken();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
  	  this.getEgresado(id);
    });  
  }

  getEgresado(id){  	

  		this._egresadoService.getEgresado(id).subscribe(
  			response => {
  				if (response.status == 'success') {
  					this.egresado = response.egresado;
            this.page_title = 'Editar ' + this.egresado.name;
  				}else{
  					this._router.navigate(['home']);
  				}
  			},
  			error => {
  				console.log(<any>error);
  			}
  		);  	
  }

  onSubmit(form){
    console.log(this.egresado.id);
    this._egresadoService.update(this.token, this.egresado, this.egresado.id).subscribe(
       response => {
        if (response.status == 'success') {
          this.status_egresado = 'success';
          this.egresado = response.egresado;
          this._router.navigate(['/usuario', this.egresado.id]);
        }else {
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
