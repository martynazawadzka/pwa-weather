import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  temp: string;
  description: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(res => {
      this.temp = (res.main.temp - 273).toFixed(1);
      this.description = res.weather[0].description;
    });
  }
}
