import { AuthPageService } from './../../../pages/auth-page/authPage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeTheme } from 'src/app/store/theme/theme.actions';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
    classPrefix = 'app-nav'
    isDark$: Observable<boolean>;
    authData = this.authPageService.checkLogIn()
    isLoggedIn$: Observable<boolean>

    constructor(
        private authPageService: AuthPageService,
        private store: Store<{theme: boolean, auth: boolean}>,
        // private authStore: Store<{auth: boolean}>
    ){
        this.isDark$ = store.select('theme');
        this.isLoggedIn$ = store.select('auth')
    }
    
    ngOnInit(): void {

    }

    changeTheme () : void {
        this.store.dispatch(changeTheme())
    }

    navLinks = [
        {title: "Home", link: "/"},
        {title: "Coming Soon", link: "/"},
    ]
}