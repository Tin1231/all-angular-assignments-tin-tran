import { Component } from '@angular/core';
import { FirstPipesComponent } from './first-pipes/first-pipes.component';
import { JsonPipeComponent }  from './json-pipe/json-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirstPipesComponent,
    JsonPipeComponent,
    CustomPipeComponent
  ],
  template: `
    <app-first-pipes></app-first-pipes>
    <hr />
    <app-json-pipe></app-json-pipe>
    <hr />
    <app-custom-pipe></app-custom-pipe>
  `
})
export class AppComponent {}
