import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Workouts } from './workouts/workouts';
import { Stats } from './stats/stats';
import { Banner } from './banner/banner';

@NgModule({
  declarations: [App, Home, Workouts, Stats, Banner],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
