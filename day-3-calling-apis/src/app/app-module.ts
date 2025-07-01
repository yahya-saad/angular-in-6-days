import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './modules/home/home-module';
import { ReservationModule } from './modules/reservation/reservation-module';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
