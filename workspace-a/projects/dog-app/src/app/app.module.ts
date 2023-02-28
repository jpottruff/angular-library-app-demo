import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeneralComponentsModule } from 'general-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
