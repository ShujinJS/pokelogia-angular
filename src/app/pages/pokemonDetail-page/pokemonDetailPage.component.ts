import { RequestHelper } from './../../helper/request.helper';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
    selector: 'app-pokemonDetailPage',
    templateUrl: './pokemonDetailPage.component.html',
    styleUrls: ['./pokemonDetailPage.component.scss'],
})

export class PokemonDetailPageComponent implements OnInit {
    classPrefix = 'app-pokemonDetail'
    isDark = true;
    theme = this.isDark ? 'dark' : 'light';
    pokemon: Pokemon = {
        abilities: [],
        base_experience: 0,
        forms: [],
        game_indices: [],
        height: 0,
        held_items: [],
        id: 0,
        is_default: false,
        location_area_encounters: "",
        moves: [],
        name: "",
        order: 0,
        past_types: [],
        stats: [],
        types: [],
        weight: 0,
    };
    // sprites = [ 
    //     this.pokemon.sprites?.front_default,
    //     this.pokemon?.sprites?.back_default,
    //     this.pokemon?.sprites?.front_shiny,
    //     this.pokemon?.sprites?.back_shiny,
    // ]

    constructor(
        private requestHelper: RequestHelper,
        private route: ActivatedRoute,
    ){

    }
    
    ngOnInit(): void {
        this.getDetail();
    }

    getDetail(): void {
        const nameParam = this.route.snapshot.params['name']
        this.requestHelper.getPokemonDetail(nameParam).subscribe( pokemon => {
            this.pokemon = pokemon;
        })
    }
}