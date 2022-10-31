import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {
  url: string = 'https://backend-lbportfolio.herokuapp.com/';
  constructor( 
    private http: HttpClient
  ) { }

  obtenerDatos():Observable<any>{
    return this.http.get('../assets/data/data.json');
    //return this.http.get(this.url+"ver/personas");
  }
}
