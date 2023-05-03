import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }


    searchCountryByAlphaCode(code: string): Observable<Country | null>{

        const url = `https://restcountries.com/v3.1/alpha/${code}`;

        return this.http.get<Country[]>(url)
                   .pipe(map(countries => countries.length > 0 ? countries[0] : null),
                    catchError( () => of (null)));
    }

    
    searchCapital(term: string): Observable<Country[]>{

        const url = `${ this.apiUrl }/capital/${term}`;

        return this.http.get<Country[]>(url)
                   .pipe(
                        catchError(error => {
                            console.log(error);

                            return of ([])
                        })
                   );
    }


    searchCountry(term: string): Observable<Country[]>{

        const url = `https://restcountries.com/v3.1/name/${term}`;

        return this.http.get<Country[]>(url)
                    .pipe(
                        catchError(error => {
                            console.log(error);
            
                            return of ([])
                        })
                   );
    }


    searchRegion(region: string): Observable<Country[]>{

        const url = `https://restcountries.com/v3.1/region/${region}`;
        
        return this.http.get<Country[]>(url)
                    .pipe(
                        catchError(error => {
                            console.log(error);
            
                            return of ([])
                        })
                   );

    }
    
}