// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
// Component
import { InventoryPageComponent } from './inventoryPage.component';

@NgModule({
    declarations: [
        InventoryPageComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        InventoryPageComponent,
    ],
    providers: [],
})

export class InventoryPageModule { }