import { FooterComponentModule } from './components/footer/footer.module';
import { PokemonDetailPageModule } from './pages/pokemonDetail-page/pokemonDetailPage.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './store/theme/theme.reducer';
import { authReducer } from './store/auth/auth.reducer';

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
    StoreModule.forRoot({ 
      theme: themeReducer, 
      auth: authReducer,
    }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
