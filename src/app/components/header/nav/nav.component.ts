import { AuthPageService } from './../../../pages/auth-page/authPage.service';
import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
    classPrefix = 'app-nav'
    isDark = false;
    theme: string = this.isDark ? 'dark' : 'light'
    authData = this.authPageService.checkLogIn()

    constructor(
        private authPageService: AuthPageService
    ){

    }
    
    ngOnInit(): void {

    }

    navLinks = [
        {title: "Home", link: "/"},
        {title: "Coming Soon", link: "/"},
        {
            title: this.authData.isLoggedIn ? this.authData.username : 'Sign In', 
            link: this.authData.isLoggedIn ? "" : "/auth"
        },
    ]
}