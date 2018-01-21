import { Component, ViewChild } from '@angular/core';
import {AllMarkersComponent} from './all-markers/all-markers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Votre ville, un art';
  intro = 'Bienvenue à Montréal ... votre nouveau musée!';

  @ViewChild(AllMarkersComponent)
  allmarkers: AllMarkersComponent;

  public setDirection(){
    this.allmarkers.setDirection();
  }


}
