import { Component }          from '@angular/core';
import { CommonModule }       from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './image-toggle.component.html',
  styleUrls: ['./image-toggle.component.css']
})
export class ImageToggleComponent {
  show = false;

  toggleImage(): void {
    this.show = !this.show;
  }
}
