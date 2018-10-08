import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    HeaderComponent
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent
  ]

})
export class CoreModule { }
