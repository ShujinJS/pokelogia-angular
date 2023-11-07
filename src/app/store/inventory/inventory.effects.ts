// Angular
import { Injectable } from "@angular/core";
// Ngrx
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { mergeMap, map, catchError, of, } from "rxjs";
import {    
    AddPokemon, 
    AddPokemonSuccess, 
    AddPokemonFailure, 
    ReleasePokemon,
} from "./inventory.actions";
// Service
import { InventoryService } from './../../pages/inventory-page/inventoryPage.service';

@Injectable()

export class InventoryEffects {
    constructor(
        // Via actions$ we can have access to the dispatched actions in the app
        private actions$: Actions,
        private inventoryService: InventoryService,
    ) {

    }

    // createEffect is similar to useEffect of React.js, this block only gets fired when the AddPokemon action is dispatched
    addPokemon$ = createEffect(() => this.actions$.pipe(
        ofType(AddPokemon),
        // mergeMap allows us to take one or multiple oversables and transform them to a single observable, action is the parameter we are passing, in this case, Pokemon, 
        mergeMap((action) => this.inventoryService.addPokemon(action)
            .pipe(
                // we are piping the AddPokemonSuccess action to the AddPokemon action and pass the action-pokemon parameter to it, if the first action fails then the failure action is going to dispatch
                map(pokemon => AddPokemonSuccess(pokemon)),
                catchError( error => of(AddPokemonFailure(error)) )
            ))
    ))
}