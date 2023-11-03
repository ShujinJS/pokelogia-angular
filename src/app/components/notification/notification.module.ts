import { NotificationComponent } from './notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
        NotificationComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NotificationComponent,
    ],
})

export class NotificationModule { }