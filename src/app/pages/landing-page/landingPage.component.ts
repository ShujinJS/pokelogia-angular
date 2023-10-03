import { Router } from '@angular/router';
import { GetPokemonsModel } from './../../models/request.model';
import { RequestHelper } from './../../helper/request.helper';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-landingPage',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageComponent implements OnInit {
    classPrefix = 'app-landing';
    isDark = true;
    isPlaying = true;
    theme: string = this.isDark ? 'dark' : 'light';
    transition = this.isPlaying ? 'playing' : 'paused';
    landingHeader = 'Welcome fellow trainers!';
    landingInfo = 'You can search for your favourite Pokémons and train their abilities now! Pick your 6 Pokémons and become the very best!';
    landingNews = 'Version 1.0 includes searching your Pokémons and studying them.';
    landingUpcoming = 'Coming Soon: Pick your Pokémons.';
    pokemons: GetPokemonsModel = {
        count: 0,
        next: '',
        previous: '',
        results: []
    }
    showPokemons = 20

    constructor(
        private requestHelper: RequestHelper,
        private router: Router,
    ){

    }

    ngOnInit(): void {
        this.requestPokemons();
    }

    getMorePokemons(many: number): void {
        this.showPokemons += many;
        this.requestPokemons();
    }

    getDetailPage(name: string): void {
        this.router.navigate([`pokemon/${name}`])
    }

    requestPokemons(): void {
        const showAmount = this.showPokemons.toString();
        this.requestHelper.getPokemons('00', showAmount).subscribe( pokemons => {
            this.pokemons = pokemons
        })
    }

}