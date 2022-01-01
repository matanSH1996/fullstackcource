import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component1Component } from './component1/component1.component';
import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Component1Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
