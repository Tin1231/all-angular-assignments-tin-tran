import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-pipe',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
  testArray  = [5, 15, 53, 1, 2];
}
