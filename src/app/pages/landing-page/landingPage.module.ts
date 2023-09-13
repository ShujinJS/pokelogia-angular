import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LandingPageComponent } from './landingPage.component';

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
      CommonModule,
    ],
    exports: [ 
      LandingPageComponent
    ],
    providers: [],
  })
  
  export class LandingPageModule { }