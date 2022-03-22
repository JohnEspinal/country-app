import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryServiceResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  termino: string = '';
  hayError: boolean = false;
  countries: CountryServiceResponse[] = [];

  constructor( private countryService: CountryService ) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.countryService.searchCountry(termino)
      .subscribe(
        {next: (countries: CountryServiceResponse[]) => {
            this.countries = countries;
        },
        error: (err) =>{
          this.hayError = true;
          this.countries = [];
        }}
      )
      

    console.log(this.termino);
  }

  suggestions(termino: string){
    this.hayError = false;
  }

}
