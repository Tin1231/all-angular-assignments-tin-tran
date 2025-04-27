import { Component } from '@angular/core';
import { CommonModule }   from '@angular/common';


@Component({
  selector: 'app-profile-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-switch.component.html',
  styleUrl: './profile-switch.component.css'
})
export class ProfileSwitchComponent {
  
  view: 'default' | 'name' | 'age' | 'job' = 'default';
  
  setView(v: 'name' | 'age' | 'job') {
    this.view = v;
  }
}
