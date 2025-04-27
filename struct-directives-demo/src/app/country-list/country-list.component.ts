import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [ CommonModule ],      
  templateUrl: './country-list.component.html'
})
export class CountryListComponent {
  items = ['Finland','Sweden','Estonia','Spain','Japan'];
}