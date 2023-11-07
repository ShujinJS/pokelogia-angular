import { NotificationComponentService } from './notification.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { idGenerator } from 'src/app/helper/common.helper';
import { NotificationModel } from 'src/app/models/store.models';
import { AppStore } from 'src/app/store/app.store';
import { ShowNotification, DismissNotification, ToggleNotification } from 'src/app/store/notification/notification.action';
NotificationComponentService

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
})

export class NotificationComponent {

    constructor(
        private appStore: Store<AppStore>,
        private notificationComponentService: NotificationComponentService,
    ) {
        this.isDark$ = appStore.select('theme');
        this.notifications$ = appStore.pipe(select('notifications'))
    }

    classPrefix = 'app-notification';
    isDark$: Observable<boolean>;
    notifications$: Observable<NotificationModel[]>;
    
    showNotification(message: string) {
        this.notificationComponentService.showNotification(message);
    }

    dismissNotification(id: string) {
        this.appStore.dispatch(DismissNotification({ id }));
    }

    onMouseEnter(e: Event): void {
        if(e.target instanceof HTMLElement) {
            e.target.classList.add('show')
        }
    }

    onMouseLeave(e: Event): void {
        if(e.target instanceof HTMLElement) {
            e.target.classList.remove('show')
        }
    }
}