// Angular
import { Injectable } from "@angular/core";
// Model
import { Pokemon } from './../../models/pokemon.model';
// NgRx
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class InventoryService {
    
    constructor(

    ) {

    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        // of meaning, returning an Observable in type of Pokemon
        return of(pokemon);
    }
}