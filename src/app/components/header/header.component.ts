import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
    classPrefix = 'app-header'
    isDark = true;
    theme: string = this.isDark ? 'dark' : 'light';
} 