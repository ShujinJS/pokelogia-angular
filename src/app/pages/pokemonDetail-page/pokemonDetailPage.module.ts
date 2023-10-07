import { PokemonDetailPageComponent } from './pokemonDetailPage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

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