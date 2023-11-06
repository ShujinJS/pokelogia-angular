// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Model
import { Pokemon } from './../../models/pokemon.model';
import { AppStore } from 'src/app/store/app.store';
import { getFromStore, storeConstants, storeDefault } from 'src/app/helper/storage.helper';
// Helper
import { typeColorConstants } from './../../helper/constants.helper';

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
    leftSlideLimit = 580
    rightSlideLimit = -580
    draggingPx = 118
    bannerImage = '../../../assets/pikachu_greeting-crp.png'

    constructor(
        private appStore: Store<AppStore>,
        private router: Router,
    ) {
        this.isDark$ = appStore.select('theme');
    }

    ngOnInit(): void {
        const beltStore = getFromStore(this.beltConstant);
        beltStore ? this.belt = beltStore : this.belt = []
    }

    arrowHandler(direction: string): void {
        if(direction === 'left' && (this.draggingPx < this.leftSlideLimit)) {
            this.draggingPx = this.draggingPx + this.ballWidth
        } else if (direction === 'right' && (this.draggingPx > this.rightSlideLimit)) {
            this.draggingPx = this.draggingPx - this.ballWidth
        }
    }

    clickHandler(e: Event): void {
        if(e.target instanceof HTMLElement) {
            const srcUrl = e.target.getAttribute('src');
            const openUrl = '../../../assets/open-pokeball.png';
            const closedUrl = '../../../assets/closed-pokeball.png';
            const card = e.target.parentElement?.children[0]
            
            if(srcUrl?.includes('closed')) {
                e.target.setAttribute('src', openUrl)
                card?.classList.add('open')
            } else {
                e.target.setAttribute('src', closedUrl)
                card?.classList.remove('open')
            }
        }
    }

    foilStyleHandler(pokemonType: string): string {
        return typeColorConstants[pokemonType as keyof typeof typeColorConstants]
    }

    getDetailPage(name: string): void {
        this.router.navigate([`pokemon/${name}`])
    }
}