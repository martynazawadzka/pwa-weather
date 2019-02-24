import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  weatherApiUrl =
    'https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=53.1324886&lon=23.1688403';

  getWeather() {
    return this.http.get(this.weatherApiUrl);
  }
}
