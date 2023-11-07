import { InventoryModel, NotificationModel } from './../models/store.models';
import { getFromStore, storeConstants } from '../helper/storage.helper';
import { appStoreConstants } from '../helper/constants.helper';

export interface AppStore {
    theme: boolean;
    auth: boolean;
    inventory: InventoryModel;
    notifications: NotificationModel[];
}