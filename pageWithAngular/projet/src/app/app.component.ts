import { Component, ViewChild } from '@angular/core';
import {AllMarkersComponent} from './all-markers/all-markers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your City As Art';
  Intro = 'Welcome to down-town Montreal ... your new museum!';

  @ViewChild(AllMarkersComponent)
  allmarkers: AllMarkersComponent;

  public setDirection(){
    this.allmarkers.setDirection();
  }


}
