import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  searchByRegion(region: string): void{

    this.countriesService.searchRegion(region).subscribe(countries =>{
      
      console.log(countries);

      this.countries = countries;
    });
  }

}
