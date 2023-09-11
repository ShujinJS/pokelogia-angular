import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
@NgModule({
    declarations: [
      HeaderComponent,
      NavComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
    ],
    exports: [ 
      HeaderComponent 
    ],
    providers: [],
  })
  
  export class HeaderModule { }