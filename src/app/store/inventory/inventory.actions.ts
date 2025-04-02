import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/models/pokemon.model";

export const AddPokemon = createAction(
    '[InventoryComponent] AddPokemon',
    props<Pokemon>(),
);

export const AddPokemonSuccess = createAction(
    '[InventoryComponent] AddPokemon successful',
    props<Pokemon>(),
);

export const AddPokemonFailure = createAction(
    '[InventoryComponent] AddPokemon fail',
    props<{ error: any }>()
);

export const ReleasePokemon = createAction(
    '[InventoryComponent] ReleasePokemon',
    props<{ id: number }>()
)