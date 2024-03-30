import { Component } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  public countries: Country[] = [];
  baseUrl = "http://localhost:5079/";

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get<Country[]>(environment.baseUrl + 'api/Countries').subscribe(
      {
        next: result => this.countries = result,
        error: error => console.error(error)
      }

    );
  }
}
