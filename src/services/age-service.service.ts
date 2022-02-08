import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeServiceService {

  constructor(
    private http: HttpClient
    ) { }
   
    getName(name: string):Observable<any>{
    return this.http.get(`https://api.agify.io?name=${name}&country_id=BR`);
    }
 
}
