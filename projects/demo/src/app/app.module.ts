import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { SmartBuildingsModule } from '@fathym-it/smart-buildings-common';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), AppRoutingModule, BrowserModule, BrowserAnimationsModule, SmartBuildingsModule.forRoot()],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
