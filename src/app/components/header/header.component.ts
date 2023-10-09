import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
    classPrefix = 'app-header'
    isDark$: Observable<boolean>
    constructor(
        private store: Store<{theme: boolean}>
    ){
        this.isDark$ = store.select('theme')
    }
} 