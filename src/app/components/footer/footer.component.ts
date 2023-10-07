import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {
    classPrefix = 'app-footer';
    isDark = false;
    theme: string = this.isDark ? 'dark' : 'light';
}