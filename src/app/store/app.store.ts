import { NotificationModel } from './../models/store.models';
import { Pokemon } from "../models/pokemon.model";
import { getFromStore, storeConstants } from '../helper/storage.helper';

export interface AppStore {

    theme: boolean;
    auth: boolean;
    // pokemons: Pokemon[];
    notifications: NotificationModel[];
}