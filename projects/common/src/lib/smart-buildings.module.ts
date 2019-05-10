import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartBuildingsConfigManagerElementComponent } from './elements/config-manager/config-manager.component';

@NgModule({
  declarations: [SmartBuildingsConfigManagerElementComponent],
  entryComponents: [SmartBuildingsConfigManagerElementComponent],
  exports: [SmartBuildingsConfigManagerElementComponent],
  imports: [
    CommonModule
  ]
})
export class SmartBuildingsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SmartBuildingsModule,
      providers: []
    };
  }}
