// Model
import { Pokemon } from "./pokemon.model";
export interface NotificationModel {
    id: string,
    message: string,
    isShowing: boolean,
}

export interface InventoryModel {
    belt: Pokemon[],
}