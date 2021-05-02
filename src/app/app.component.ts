import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OptimusAngular';
  isCountdropdownOpen = false;
  dropDownToggle(){
    this.isCountdropdownOpen = !this.isCountdropdownOpen;
  } 
}
