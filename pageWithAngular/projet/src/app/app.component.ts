import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Votre ville, un art';
  MapLocation = 'Bienvenue à Montréal ... votre nouveau musée!';
  lat: number = 45.509881;
  lng: number =  -73.563838;
  zoom: number = 12;
  dir = undefined;

  public setDirection() {
    this.dir = {
      origin: { lat: 45.580410, lng: -73.622218 },
      destinaiton: { lat: 45.506855, lng: -73.558029 }
    }
  }

}
