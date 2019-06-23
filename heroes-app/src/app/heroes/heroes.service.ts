import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Hero} from "../Hero";



@Injectable()
export class HeroesService {

    constructor(private http: HttpClient) { }

    apiURL = "http://localhost:8080/heroes-api/hero/";

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
      })};
    
    getAllHeroes(): Observable<Hero> {
        return this.http.get<Hero>(this.apiURL);
    }

    getAllHeroesOrdered(value: String, type: String): Observable<Hero> {
        return this.http.get<Hero>(this.apiURL + "/" + value + "/" + "ASC");
    }

    insertNewHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.apiURL, hero, this.httpOptions);
    }

    deleteHero(hero:Hero): Observable<Hero> {
        return this.http.delete<Hero>(this.apiURL + hero.id, this.httpOptions);
    }
}