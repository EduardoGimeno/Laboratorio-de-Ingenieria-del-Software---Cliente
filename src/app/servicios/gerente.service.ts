import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  private urlApp: string;  // URL to web api

  constructor(private http: HttpClient) {
    this.urlApp = 'https://smartcampus-unizar.herokuapp.com/gerente';
  }

  public logIn(nomUsuario: string, password: string) {
    let params = new HttpParams()
      .set("nomUsuario", nomUsuario)
      .set("password", password);
    return this.http.get(this.urlApp + '/signIn', {params: params});
  }

}
