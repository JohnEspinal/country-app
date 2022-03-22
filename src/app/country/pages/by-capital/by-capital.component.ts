import { Component } from '@angular/core';
import { CountryServiceResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {


  termino: string = '';
  hayError: boolean = false;
  countries: CountryServiceResponse[] = [];


  constructor( private countryService: CountryService ) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.countryService.searchCapital(termino)
      .subscribe(
        {next: (countries: CountryServiceResponse[]) => {
            this.countries = countries;
        },
        error: (err: any) =>{
          this.hayError = true;
          this.countries = [];
        }}
      )
      

  }

  // suggestions(termino: string){
  //   this.hayError = false;
  // }

}
