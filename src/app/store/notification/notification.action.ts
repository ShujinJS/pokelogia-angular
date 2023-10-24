import { NotificationModel } from './../../models/store.models';
import { createAction, props } from "@ngrx/store";

export const ShowNotification = createAction(
    '[NotificationComponent] ShowNotification',
    props<NotificationModel>()
);

export const ClearNotification = createAction(
    '[NotificationComponent] ClearNotification'
);