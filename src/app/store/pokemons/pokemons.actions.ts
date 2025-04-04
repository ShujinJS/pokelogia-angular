import { createAction, props } from "@ngrx/store";
import { GetPokemonsModel } from "src/app/models/request.model";

export const GetPokemons = createAction(
    '[PokemonsComponent] GetPokemonsAction', props<GetPokemonsModel>(),
); 