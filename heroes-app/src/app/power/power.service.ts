import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Power} from "../Power";




@Injectable()
export class PowerService {

    constructor(private http: HttpClient) { }
    
    apiURL = "http://localhost:8080/heroes-api/power/";

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
      })};
    
    getAllPowers(): Observable<Power> {
        return this.http.get<Power>(this.apiURL);
    }

    insertNewPower(power: Power): Observable<any> {
        return this.http.post(this.apiURL, power, this.httpOptions);
    }
}