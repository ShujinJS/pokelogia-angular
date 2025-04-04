import { createAction, props } from "@ngrx/store";
import { NotificationModel } from './../../models/store.models';

export const ShowNotification = createAction(
    '[NotificationComponent] ShowNotification',
    props<NotificationModel>(),
);

export const DismissNotification = createAction(
    '[NotificationComponent] DismissNotification',
    props<{id: string}>(),
);

export const ToggleNotification = createAction(
    '[NotificationComponent] ToggleNotification',
    props<{id: string}>(),
);

export const ClearAllNotifications = createAction(
    '[NotificationComponent] ClearAllNotifications',
);