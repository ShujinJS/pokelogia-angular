import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landingPage.component';
import { LandingPageModule } from './pages/landing-page/landingPage.module';

const routes: Routes = [
  {path: "home", component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LandingPageModule]
})
export class AppRoutingModule { }
