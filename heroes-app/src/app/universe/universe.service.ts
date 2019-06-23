import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Universe } from "../Universe";



@Injectable()
export class UniverseService {

    constructor(private http: HttpClient) { }
    
    apiURL = "http://localhost:8080/heroes-api/universe/";

    getAllUniverses(): Observable<Universe> {
        return this.http.get<Universe>(this.apiURL);
    }
}