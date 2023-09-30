import { Component } from '@angular/core';

@Component({
    selector: 'app-landingPage',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageComponent {
    classPrefix = 'app-landing';
    isDark = true;
    isPlaying = true;
    theme: string = this.isDark ? 'dark' : 'light';
    transition = this.isPlaying ? 'playing' : 'paused';
    landingHeader = 'Welcome fellow trainers!';
    landingInfo = 'You can search for your favourite Pokémons and train their abilities now! Pick your 6 Pokémons and become the very best!';
    landingNews = 'Version 1.0 includes searching your Pokémons and studying them.';
    landingUpcoming = 'Coming Soon: Pick your Pokémons.';
}