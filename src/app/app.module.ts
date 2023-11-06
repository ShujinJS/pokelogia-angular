import { AppStore } from './store/app.store';
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
// Routing
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, } from '@angular/common/http';
// ngRx
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './store/theme/theme.reducer';
import { authReducer } from './store/auth/auth.reducer';
import { inventoryReducer } from './store/inventory/inventory.reducer';
import { notificationReducer } from './store/notification/notification.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Component
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterComponentModule } from './components/footer/footer.module';
import { NotificationModule } from './components/notification/notification.module';
// Page
import { PokemonDetailPageModule } from './pages/pokemonDetail-page/pokemonDetailPage.module';
import { InventoryPageModule } from './pages/inventory-page/inventoryPage.module';
// Effect
import { EffectsModule } from '@ngrx/effects';
import { InventoryEffects } from './store/inventory/inventory.effects';

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
    InventoryPageModule,
    FooterComponentModule,
    NotificationModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot<AppStore>({ 
      theme: themeReducer, 
      auth: authReducer,
      inventory: inventoryReducer,
      notifications: notificationReducer,
    }, {}),
    EffectsModule.forRoot([
      InventoryEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
