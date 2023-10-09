import { getFromStore, storeConstants } from 'src/app/helper/storage.helper';
import { createReducer, on } from '@ngrx/store';
import { logUserIn } from './auth.actions';
const isLoggedIn = getFromStore(storeConstants.isLoggedIn)
export const initialState = isLoggedIn.isLoggedIn;

export const authReducer = createReducer(
    initialState,
    on(logUserIn, (state => true))
)