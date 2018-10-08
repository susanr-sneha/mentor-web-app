import { ModulesRoutingModule } from './modules-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MainModule
  ],
  declarations: []
})
export class ModulesModule { }
