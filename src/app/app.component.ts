import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  temp: string;
  description: string;
  weatherData: any;
  update: boolean = false;

  constructor(private weatherService: WeatherService, updates: SwUpdate) {
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(res => {
      this.weatherData = res;
      this.temp = (this.weatherData.main.temp - 273).toFixed(1);
      this.description = this.weatherData.weather[0].description;
    });
  }
}
