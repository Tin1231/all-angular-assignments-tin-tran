import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-toggle.component.html'
})
export class ImageToggleComponent {
  show = false;
  toggleImage() { this.show = !this.show; }
}
