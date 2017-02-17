import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {  MainComponent } from './mainpage/mainpage.component';
import {  ContactpageComponent } from './contactpage/contactpage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HeadContent } from './headcontent/headcontent.component';
import { FooterContent } from './footercontent/footercontent.component';
import { ShoelistComponent } from './mainpage/description/descriptionlist.component';
import { routing } from './app.routing';  

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, MainComponent, ContactpageComponent, DetailpageComponent, HeadContent, FooterContent, ShoelistComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }