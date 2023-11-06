// NgRx
import { createReducer, on} from "@ngrx/store";
// Actions
import { 
    AddPokemon, 
    AddPokemonSuccess, 
    AddPokemonFailure, 
    ReleasePokemon,
} from "./inventory.actions";
// Model
import { InventoryModel } from "src/app/models/store.models";

export const initialState: InventoryModel = {
    belt: [],
}

export const inventoryReducer = createReducer(
    initialState,

    // Effect is going to handle with triggering the AddPokemonSuccess action
    on(AddPokemon, state => state),

    on(AddPokemonSuccess, (state, pokemon) => state = { ...state, belt: [ pokemon ]}),

    on(AddPokemonFailure, (state, { error }) => {
        throw(error + ' occured.');
    }),

    on(ReleasePokemon, (state, { id }) => {
        state.belt.filter(pokemon => pokemon.id !== id);
        return state;
    })
)