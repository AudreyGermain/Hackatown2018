import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DROOM TOOM';
  MapLocation = 'Welcome to down-town Montreal ... your new museum!';
  lat: number = 45.5088400;
  lng: number =  -73.5878100;
}
