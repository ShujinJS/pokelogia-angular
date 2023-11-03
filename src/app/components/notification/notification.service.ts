// Angular
import { Injectable, OnInit } from "@angular/core";
// Store
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppStore } from 'src/app/store/app.store';
import { 
    ShowNotification,
    DismissNotification,
    ToggleNotification,
} from 'src/app/store/notification/notification.action';
// Helper
import { idGenerator } from 'src/app/helper/common.helper';
// Model
import { NotificationModel } from './../../models/store.models';

@Injectable({
    providedIn: 'root',
})

export class NotificationComponentService {

    constructor(
        private appStore: Store<AppStore>
    ) {
        this.notifications$ = appStore.pipe(select('notifications'));
    }

    notifications$: Observable<NotificationModel[]>;

    showNotification(message: string) {
        const id = idGenerator();
        this.appStore.dispatch(ShowNotification({ id, message, isShowing: true }))
        // setTimeout(()=> this.dismissNotification(id), 5000)
    }

    dismissNotification(id: string) {
        this.appStore.dispatch(DismissNotification({ id }))
    }

    toggleNotification(id: string) {
        this.appStore.dispatch(ToggleNotification({ id }))
    }
}