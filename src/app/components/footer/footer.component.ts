import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {
    classPrefix = 'app-footer';
    isDark$: Observable<boolean>;

    constructor(
        private store: Store<{theme: boolean}>
    ){
        this.isDark$ = store.select('theme')
    }
}