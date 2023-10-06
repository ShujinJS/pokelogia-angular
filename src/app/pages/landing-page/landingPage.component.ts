import { Router } from '@angular/router';
import { GetPokemonsModel, Result } from './../../models/request.model';
import { RequestHelper } from './../../helper/request.helper';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
@Component({
    selector: 'app-landingPage',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageComponent implements OnInit {
    classPrefix = 'app-landing';
    isDark = false;
    isPlaying = true;
    theme: string = this.isDark ? 'dark' : 'light';
    transition = this.isPlaying ? 'playing' : 'paused';
    landingHeader = 'Welcome fellow trainers!';
    landingInfo = 'You can search for your favourite Pokémons and train their abilities now! Pick your 6 Pokémons and become the very best!';
    landingNews = 'Version 1.0 includes searching your Pokémons and studying them.';
    landingUpcoming = 'Coming Soon: Pick your Pokémons.';
    showPokemons = 20
    pokemons: GetPokemonsModel = {
        count: 0,
        next: '',
        previous: '',
        results: []
    }
    inputValue: string = '';
    filteredPokemons: Result[] = []

    constructor(
        private requestHelper: RequestHelper,
        private router: Router,
    ){

    }

    ngOnInit(): void {
        this.requestPokemons();
    }

    // getMorePokemons(many: number): void {
    //     this.showPokemons += many;
    //     this.requestPokemons();
    // }

    getDetailPage(name: string): void {
        this.router.navigate([`pokemon/${name}`])
    }

    requestPokemons(): void {
        this.requestHelper.getPokemons().subscribe( pokemons => {
            this.pokemons = pokemons
            this.filteredPokemons = pokemons.results
        })
    }

    onKeyUp(key: string) {
        this.filteredPokemons = this.pokemons.results.filter( pokemon => {
            return pokemon.name.includes(key)
        })
    }
}