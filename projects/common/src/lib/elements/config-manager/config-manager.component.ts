import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu-ide/common';

export class SmartBuildingsConfigManagerElementState {}

export class SmartBuildingsConfigManagerContext extends LCUElementContext<SmartBuildingsConfigManagerElementState> {}

export const SelectorSmartBuildingsConfigManagerElement = 'smart-buildings-config-manager-element';

@Component({
  selector: SelectorSmartBuildingsConfigManagerElement,
  templateUrl: './config-manager.component.html',
  styleUrls: ['./config-manager.component.scss']
})
export class SmartBuildingsConfigManagerElementComponent extends LcuElementComponent<SmartBuildingsConfigManagerContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
