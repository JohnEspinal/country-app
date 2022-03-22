import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryServiceResponse } from '../interfaces/country.interface';
import { CountryServiceResponseV2 } from '../interfaces/countryv2.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // http: HttpClient = new HttpClient();

  private baseUrl: string = 'https://restcountries.com';

  countries: CountryServiceResponse[] = [];


  constructor(private http: HttpClient) { }

  searchCountry(input: string): Observable<CountryServiceResponse[]>{

  const url = `${ this.baseUrl }/v3.1/name/${ input }`
  
  return this.http.get<CountryServiceResponse[]>(url);
    
  }

  searchCapital(input: string): Observable<CountryServiceResponse[]>{

    const url = `${ this.baseUrl }/v3.1/capital/${ input }`
    
    return this.http.get<CountryServiceResponse[]>(url);
      
  }

  getCountryById(id: string): Observable<CountryServiceResponseV2>{

    const url = `${this.baseUrl}/v2/alpha/${ id }`
    
    return this.http.get<CountryServiceResponseV2>(url);
      
  }
  
}
