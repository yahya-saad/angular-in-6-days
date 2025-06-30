import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './modules/home/home-module';
import { ReservationModule } from './modules/reservation/reservation-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
