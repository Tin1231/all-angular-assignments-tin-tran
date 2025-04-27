import { Component } from '@angular/core';
import { CommonModule }   from '@angular/common';


@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];
}
