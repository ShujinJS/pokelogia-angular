import { createReducer, on } from '@ngrx/store';
import { changeTheme } from './theme.actions';

export const initialState = false;

export const themeReducer = createReducer(
    initialState,
    on(changeTheme, (state) => !state)
);