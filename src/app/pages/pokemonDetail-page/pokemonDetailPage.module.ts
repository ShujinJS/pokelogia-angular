// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
// Component
import { PokemonDetailPageComponent } from './pokemonDetailPage.component';

@NgModule({
    declarations: [
      PokemonDetailPageComponent,
    ],
    imports: [
      CommonModule,
    ],
    exports: [ 
      PokemonDetailPageComponent,
    ],
    providers: [],
  })
  
  export class PokemonDetailPageModule { }