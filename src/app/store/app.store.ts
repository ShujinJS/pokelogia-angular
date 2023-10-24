import { NotificationModel } from './../models/store.models';
import { Pokemon } from "../models/pokemon.model";

export interface AppStore {
    readonly pokemons: Pokemon[];
    readonly notification: NotificationModel[];
}