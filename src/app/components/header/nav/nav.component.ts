import { AuthPageService } from './../../../pages/auth-page/authPage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
    classPrefix = 'app-nav'
    isDark$: Observable<boolean>;
    isToggle: boolean = false;
    authData = this.authPageService.checkLogIn()
    isLoggedIn$: Observable<boolean>
    showMiniLinks = false

    constructor(
        private authPageService: AuthPageService,
        private appStore: Store<{theme: boolean, auth: boolean}>,
    ){
        this.isDark$ = appStore.select('theme');
        this.isLoggedIn$ = appStore.select('auth')
    }
    
    ngOnInit() : void {

    }

    miniLinkHandler (bool: boolean) : void {
        this.showMiniLinks = bool
    }

    navLinks = [
        {title: "Home", link: "/"},
        {title: "Coming Soon", link: "/"},
    ]

    miniNavLinks = [
        {title: 'My Account', link: 'comingsoon'},
        {title: 'Inventory', link: 'inventory'},
        {title: 'Log Out', link: ''},
    ]
}