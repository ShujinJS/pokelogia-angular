import { NotificationModel } from './../../models/store.models';
import { createReducer, on } from '@ngrx/store';
import { ShowNotification, ClearNotification, } from './notification.action';

export const initialState: ReadonlyArray<NotificationModel> = [];

export const NotificationReducer = createReducer(
    initialState,
    on(ShowNotification, (state, {message, isShowing}) => [ ...state, { message, isShowing }])
);