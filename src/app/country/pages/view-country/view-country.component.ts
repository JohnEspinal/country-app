import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryServiceResponse } from '../../interfaces/country.interface';
import { CountryServiceResponseV2 } from '../../interfaces/countryv2.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {


  country!: CountryServiceResponseV2;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countryService.getCountryById(id) ),
        tap(console.log)
      )
      .subscribe(
        country => {
          this.country = country;
        }
      )


    // this.activatedRoute.params
    //   .subscribe({
    //     next: ({ id })=>{
    //       console.log(id);

    //       this.countryService.getCountryById(id)
    //         .subscribe(country => {
    //           console.log(country);
    //         })
    //     }
    //   })
  }

}
