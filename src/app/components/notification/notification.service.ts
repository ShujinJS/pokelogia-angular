import { NotificationModel } from './../../models/store.models';
import { Injectable, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { idGenerator } from 'src/app/helper/common.helper';
import { AppStore } from 'src/app/store/app.store';
import { 
    ShowNotification,
    DismissNotification,
} from 'src/app/store/notification/notification.action';


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
        // setTimeout(()=> this.dismissNotification(id),5000)
    }

    dismissNotification(id: string) {
        this.appStore.dispatch(DismissNotification({ id }))
    }
}