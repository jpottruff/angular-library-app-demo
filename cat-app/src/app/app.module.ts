import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// `general-components` is the **alias** that exists in the `paths` section of `tsconfig.json`
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
