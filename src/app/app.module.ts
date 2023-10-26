import { AppStore } from './store/app.store';
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, } from '@angular/common/http';

// ngRx
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './store/theme/theme.reducer';
import { authReducer } from './store/auth/auth.reducer';
import { notificationReducer } from './store/notification/notification.reducer';
notificationReducer

// Components
import { HeaderModule } from './components/header/header.module';
import { FooterComponentModule } from './components/footer/footer.module';
import { NotificationModule } from './components/notification/notification.module';
// Pages
import { PokemonDetailPageModule } from './pages/pokemonDetail-page/pokemonDetailPage.module';

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
    NotificationModule,
    StoreModule.forRoot<AppStore>({ 
      theme: themeReducer, 
      auth: authReducer,
      notifications: notificationReducer,
    }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
