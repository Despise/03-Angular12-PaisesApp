import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  get httpParams () {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<PaisResponse[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string): Observable<PaisResponse[]> {
    const url = `${ this.apiUrl }/capital/${ termino}`;
    return this.http.get<PaisResponse[]>( url,{ params: this.httpParams } );
  }

  buscarPorCodigoPais( id: string): Observable<PaisResponse> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<PaisResponse>( url );
  }

  buscarPorRegion( region: string): Observable<PaisResponse[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } )
    .pipe(
      tap( console.log )
    );
  }
}
