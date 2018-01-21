import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { MuralesComponent } from './murales/murales.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralesComponent
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
