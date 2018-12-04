import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';
import {Egresado} from '../models/egresado';

@Injectable()
export class EgresadoService {
	public url: string;
	

	constructor(
		public _http: HttpClient
	){
		this.url = GLOBAL.url;
	}

	pruebas(){
		return "Hola mundo";
	}

	create(token, egresado: Egresado): Observable<any>{
		let json = JSON.stringify(egresado);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);
		
		return this._http.post(this.url + 'egresado', params, {headers: headers});									   
	}

	getEgresados(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.get(this.url + 'egresados', {headers: headers});
	}

	getEgresado(id): Observable<any>{
		return this._http.get(this.url + 'egresados/' + id);
	}

	update(token, car, id): Observable<any>{
		let json = JSON.stringify(car);
		let params = "json="+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		                               .set('Authorization', token);
		return this._http.put(this.url + 'egresados/' + id, params, {headers: headers});
	}

	delete(token, id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		                               .set('Authorization', token);
		return this._http.delete(this.url + 'egresados/' + id, {headers: headers});
	}
}	
