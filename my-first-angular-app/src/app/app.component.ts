import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DataComponent } from './data/data.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WeatherComponent, DataComponent ],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics Course';
  name  = 'Tin Tran';

  yesterdayWeather = 'Yesterday was 12 °C and cloudy';
}

