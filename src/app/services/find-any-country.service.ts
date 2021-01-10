import {  Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FindAnyCountryService {

  constructor(private http: HttpClient) {
    console.log("Servicio funcionado");
  }

  URI = 'https://restcountries.eu/rest/v2/';

  getAllCountry(){
    return this.http.get(`${this.URI}all`)
  }

  getOneCountry(code){
    return this.http.get(`${this.URI}alpha?codes=${code}`)
  }

  getOneRegion(region){
    return this.http.get(`${this.URI}region/${region}`)
  }
}