import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { AuthPageComponent } from './authPage.component';

@NgModule({
    declarations: [
      AuthPageComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      AuthPageComponent,
    ],
    providers: [],
  })
  
  export class AuthPageModule { }