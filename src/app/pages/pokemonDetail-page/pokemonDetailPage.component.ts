import { RequestHelper } from './../../helper/request.helper';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToStore, getFromStore, setStore, storeConstants, storeDefault } from 'src/app/helper/storage.helper';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonLocations } from 'src/app/models/request.model';

@Component({
    selector: 'app-pokemonDetailPage',
    templateUrl: './pokemonDetailPage.component.html',
    styleUrls: ['./pokemonDetailPage.component.scss'],
})

export class PokemonDetailPageComponent implements OnInit {
    classPrefix = 'app-pokemonDetail'
    ctrClassPrefix = '__ctr__details-ctr'
    isDark$: Observable<boolean>;
    nameParam = this.route.snapshot.params['name']
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
    thumbnail = this.pokemon.sprites?.other?.['official-artwork']?.front_default
    areas: PokemonLocations[] = []
    beltConstant: string = storeConstants.belt
    belt: Pokemon[] = storeDefault.belt || []
    // sprites = [ 
    //     this.pokemon.sprites?.front_default,
    //     this.pokemon?.sprites?.back_default,
    //     this.pokemon?.sprites?.front_shiny,
    //     this.pokemon?.sprites?.back_shiny,
    // ]

    constructor(
        private requestHelper: RequestHelper,
        private route: ActivatedRoute,
        private store: Store<{theme: boolean}>,
    ){
        this.isDark$ = store.select('theme')
    }
    
    ngOnInit(): void {
        this.getDetail();
        this.getEncounters();
        const beltStore = getFromStore(this.beltConstant)
        beltStore ? this.belt = beltStore : this.belt = []
    }

    getDetail(): void {
        this.requestHelper.getPokemonDetail(this.nameParam).subscribe( pokemon => {
            this.pokemon = pokemon;
        })
    }

    setThumbnail(thumb?: string): void {
        this.thumbnail = thumb;
    }

    checkStats(stat: number): string {
        switch(true){
            case stat < 65:
                return '__low-stat';
            case stat > 75:
                return '__high-stat';
            default:
                return '';
        }
    }

    getEncounters(): void {
        this.requestHelper.getPokemonEncounters(this.nameParam).subscribe( encounter => {
            this.areas = encounter;
        })
    }

    addToBelt(): void {
        switch(true) {
            case this.checkIfAddedToBelt():
                break;
            case this.belt.length >= 1:
                this.belt.push(this.pokemon)
                setStore(this.beltConstant, this.belt);
                break;
            default:
                this.belt.push(this.pokemon)
                addToStore(this.beltConstant, this.belt);
                break;
        }
    }

    checkIfAddedToBelt(): boolean {
        return this.belt.some(ball => ball.id === this.pokemon.id);
    }
}