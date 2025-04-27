import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColorDirective } from './text-color.directive';
import { FontSizeDirective }  from './font-size.directive';
import { ImageToggleComponent } from './image-toggle/image-toggle.component';
import { CountryListComponent }    from './country-list/country-list.component';
import { ProfileSwitchComponent }  from './profile-switch/profile-switch.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TextColorDirective,
    FontSizeDirective,
    ImageToggleComponent,
    CountryListComponent,
    ProfileSwitchComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-expand-app';
}
