import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allMarkers',
  templateUrl: './all-markers.component.html',
  styleUrls: ['./all-markers.component.css']
})
export class AllMarkersComponent implements OnInit {

  constructor() { }

  centerlat: number = 45.509881;
  centerlng: number =  -73.563838;
  zoomInit: number = 12;
  dir = undefined;

  public setDirection() {
    this.dir = {
      origin: { lat: 45.580410, lng: -73.622218 },
      destinaiton: { lat: 45.506855, lng: -73.558029 }
    }
  }

  ngOnInit() {
  }

}
