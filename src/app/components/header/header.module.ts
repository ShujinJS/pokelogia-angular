import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common'
@NgModule({
    declarations: [
      HeaderComponent,
      NavComponent,
    ],
    imports: [
    ],
    exports: [ HeaderComponent ],
    providers: [],
  })
  
  export class HeaderModule { }