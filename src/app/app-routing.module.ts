import { PokemonDetailPageComponent } from './pages/pokemonDetail-page/pokemonDetailPage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landingPage.component';
import { LandingPageModule } from './pages/landing-page/landingPage.module';
import { AuthPageComponent } from './pages/auth-page/authPage.component';
import { AuthPageModule } from './pages/auth-page/authPage.module';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "auth", component: AuthPageComponent },
  { path: "pokemon/:name", component: PokemonDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LandingPageModule, AuthPageModule]
})
export class AppRoutingModule { }