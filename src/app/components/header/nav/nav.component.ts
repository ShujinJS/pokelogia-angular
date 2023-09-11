import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
    classPrefix = 'app-nav'

    ngOnInit(): void {
        console.log('hello')
    }

    defaultPokemon: PokemonModel = {
        id: 3,
        name: "Charmander",
        type: 'fire'
    }

    navLinks = [
        {title: "Home", link: "/"},
        {title: "Coming Soon", link: "/"}
    ]
}