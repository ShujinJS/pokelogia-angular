import { AppStore } from 'src/app/store/app.store';
import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTheme } from 'src/app/store/theme/theme.actions';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {
    constructor(
        private appStore: Store<AppStore>,
    ) {
        this.isDark$ = appStore.select('theme');
    }

    isDark$: Observable<boolean>

    changeTheme () : void {
        this.appStore.dispatch(changeTheme())
    }
}