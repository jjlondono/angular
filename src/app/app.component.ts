//import { Component } from '@angular/core';
import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'],
  providers: [UserService]
  
})
export class AppComponent implements OnInit{
	public identity;
	public token;
  public user: User;
  public mapped;
  @Input() login: string;

  constructor(
  	private _userService: UserService,
   
  ){
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
    //this.user = this.user = new User(1, '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(){
  	console.log('app.component cargado');
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.mapped = Array(this.identity);
    //console.log(this.mapped);

    //this.user = JSON.stringify( Object.create(this._userService.getIdentity()));

   
  }
}
