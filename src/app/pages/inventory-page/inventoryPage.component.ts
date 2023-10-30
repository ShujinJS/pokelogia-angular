// Angular
import { Component, OnInit } from '@angular/core';
// Store
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// Model
import { Pokemon } from './../../models/pokemon.model';
import { AppStore } from 'src/app/store/app.store';
import { getFromStore, storeConstants, storeDefault } from 'src/app/helper/storage.helper';

@Component({
    selector: 'app-inventoryPage',
    templateUrl: './inventoryPage.component.html',
    styleUrls: ['./inventoryPage.component.scss']
})

export class InventoryPageComponent implements OnInit {

    classPrefix = 'app-inventoryPage'
    isDark$: Observable<boolean>
    beltConstant: string = storeConstants.belt
    belt: Pokemon[] = storeDefault.belt || []
    isOpen = false
    ballWidth = 234
    leftSlideLimit = 586
    rightSlideLimit = -584
    draggingPx = 118


    constructor(
        private appStore: Store<AppStore>,
    ) {
        this.isDark$ = appStore.select('theme');
    }

    ngOnInit(): void {
        const beltStore = getFromStore(this.beltConstant);
        beltStore ? this.belt = beltStore : this.belt = []
    }

    slideHandler(direction: string): void {
        if(direction === 'left' && (this.draggingPx < this.leftSlideLimit)) {
            this.draggingPx = this.draggingPx + this.ballWidth
        } else if (direction === 'right' && (this.draggingPx > this.rightSlideLimit)) {
            this.draggingPx = this.draggingPx - this.ballWidth
        }
    }
}