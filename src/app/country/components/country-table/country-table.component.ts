import { Component, Input, OnInit } from '@angular/core';
import { CountryServiceResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent implements OnInit {

  @Input('countries') countries: CountryServiceResponse[] = [];

  


  constructor() { }

  ngOnInit(): void {
  }

}
