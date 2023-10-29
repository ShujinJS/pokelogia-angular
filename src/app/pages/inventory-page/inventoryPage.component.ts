// Angular
import { Component, OnInit } from '@angular/core';
// Store
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// Model
import { Pokemon } from './../../models/pokemon.model';
import { AppStore } from 'src/app/store/app.store';

@Component({
    selector: 'app-inventoryPage',
    templateUrl: './inventoryPage.component.html',
    styleUrls: ['./inventoryPage.component.scss']
})

export class InventoryPageComponent implements OnInit {

    classPrefix = 'app-inventoryPage'
    isDark$: Observable<boolean>

    constructor(
        private appStore: Store<AppStore>,
    ) {
        this.isDark$ = appStore.select('theme');
    }

    ngOnInit(): void {

    }
}