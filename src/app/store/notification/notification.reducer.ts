import { NotificationModel } from './../../models/store.models';
import { createReducer, on } from '@ngrx/store';
import { 
    ShowNotification, 
    DismissNotification, 
    ToggleNotification,
    ClearAllNotifications,
} from './notification.action';

// export const initialState: ReadonlyArray<NotificationModel> = [];
// don't have to use the 'Readonly' since we use actions with state seperator to make the state immutable
export const initialState: NotificationModel[] = []

export const notificationReducer = createReducer(
    initialState,

    on(ShowNotification, ( state, { id, message } ) => [ ...state, { id, message, isShowing: true }]),

    on(DismissNotification, ( state, { id } ) => state.filter( notif => notif.id !== id )),

    on(ToggleNotification, ( state, { id } ) => 
        state.filter(notif => {
            if(notif.id === id) {
                notif.isShowing = !notif.isShowing
            } 
        })
    ),

    on(ClearAllNotifications, ( state ) => state = initialState),

);