import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-switch.component.html'
})
export class ProfileSwitchComponent {
  view: 'default'|'name'|'age'|'job' = 'default';
  setView(v: any) { this.view = v; }
}
