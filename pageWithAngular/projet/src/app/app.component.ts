import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your City As Art';
  MapLocation = 'Welcome to down-town Montreal ... your new museum!';
  lat: number = 45.509881;
  lng: number =  -73.563838;
  zoom: number = 15;
}
