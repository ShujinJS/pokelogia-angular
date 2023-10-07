import { FooterComponentModule } from './components/footer/footer.module';
import { PokemonDetailPageModule } from './pages/pokemonDetail-page/pokemonDetailPage.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    PokemonDetailPageModule,
    FooterComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
