import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    
import { FormsModule } from '@angular/forms';      

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule ],         
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToggled    = false;      
  showMessage  = false;       
  messageContent =             
    'Hello! You have clicked the button.';

  get buttonColor(): string {
    return this.isToggled ? 'lightgreen' : 'lightcoral';
  }

  onButtonClick(): void {
    this.isToggled   = !this.isToggled;
    this.showMessage = !this.showMessage;
  }
}
