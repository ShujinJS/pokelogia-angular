// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Module
import { AuthPageModule } from './pages/auth-page/authPage.module';
import { LandingPageModule } from './pages/landing-page/landingPage.module';
// Component
import { AuthPageComponent } from './pages/auth-page/authPage.component';
import { LandingPageComponent } from './pages/landing-page/landingPage.component';
import { PokemonDetailPageComponent } from './pages/pokemonDetail-page/pokemonDetailPage.component';
import { InventoryPageComponent } from './pages/inventory-page/inventoryPage.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "auth", component: AuthPageComponent },
  { path: "pokemon/:name", component: PokemonDetailPageComponent },
  { path: "inventory", component: InventoryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LandingPageModule, AuthPageModule]
})
export class AppRoutingModule { }