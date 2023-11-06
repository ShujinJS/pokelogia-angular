import { createReducer, on } from "@ngrx/store";
import { GetPokemons } from "./pokemons.actions";
import { GetPokemonsModel } from 'src/app/models/request.model';

export const initialState = {};

export const pokemonsReducer = createReducer(
    initialState,

    on(GetPokemons, ( state, pokemons: GetPokemonsModel ) => [ state, pokemons ]),
)