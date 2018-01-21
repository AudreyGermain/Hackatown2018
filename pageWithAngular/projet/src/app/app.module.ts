import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { MuralesComponent } from './murales/murales.component';
import { MarkersComponent } from './markers/markers.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralesComponent,
    MarkersComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyApiuLQOLR0Hcv0OXyvJItmZuaKwvgcZ6Y'}),
    AgmDirectionModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
