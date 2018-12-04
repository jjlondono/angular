import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';
import {User} from '../models/user';

@Injectable()
export class UserService {
	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
	){
		this.url = GLOBAL.url;
	}

	pruebas(){
		return "Hola mundo";
	}

	register(user): Observable<any>{
		let json  = JSON.stringify(user);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		//peticion ajax
		return this._http.post(this.url+'register', params, {headers: headers});
	}

	signup(user, getToken = null): Observable<any>{
		if (getToken != null) {
			user.getToken = 'true';
		}
		let json  = JSON.stringify(user);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		//peticion ajax
		return this._http.post(this.url+'login', params, {headers: headers});
	}

	//consultar la informacion en el localstorage
	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if (identity != "undefined") {
			this.identity = identity;
		}else {
			this.identity = null;
		}
		return this.identity;
	}

	//consultar el token en el localstorage
	getToken(){
		let token = localStorage.getItem('token');

		if (token != "undefined") {
			this.token = token;
		}else{
			this.token = null;
		}
		return this.token;
	}

	create(token, user: User): Observable<any>{
		let json = JSON.stringify(user);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		
		return this._http.post(this.url + 'egresado', params, {headers: headers});									   
	}

	getAdmins(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		//peticion ajax
		return this._http.get(this.url + 'users', {headers: headers});
	}

	getAdmin(id): Observable<any>{
		return this._http.get(this.url + 'users/' + id);
	}

	//eliminar un usuario
	delete(token, id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		                               .set('Authorization', token);
		return this._http.delete(this.url + 'users/' + id, {headers: headers});
	}	
}
