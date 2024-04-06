import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { City } from './city';
import { ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-country-cities',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent {
  public cities: City[] = [];
  id: number;
  baseUrl = "http://localhost:5079/";

  public displayedColumns: string[] = ["cityId", "name", "population", "latitude", "longitude"];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {this.id=-1}


  ngOnInit() {
    this.getCities();
  }

  getCities() {
    let idParam = this.activatedRoute.snapshot.paramMap.get("id");
    this.id = idParam ? +idParam : -1;
    this.http.get<City[]>(`${environment.baseUrl}api/Countries/CountryCities/${this.id}`).subscribe(
      {
        next: result => this.cities = result,
        error: error => console.error(error)
      }

    );
  }
}
