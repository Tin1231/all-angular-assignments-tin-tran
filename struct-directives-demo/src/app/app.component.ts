import { Component } from '@angular/core';
import { ImageToggleComponent } from './image-toggle/image-toggle.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ProfileSwitchComponent } from './profile-switch/profile-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ImageToggleComponent,
    CountryListComponent,
    ProfileSwitchComponent
  ],
  template: `
    <app-image-toggle></app-image-toggle>
    <hr/>
    <app-country-list></app-country-list>
    <hr/>
    <app-profile-switch></app-profile-switch>
  `
})

export class AppComponent {
  title = 'struct-directives-demo';
}
