import { TestBed } from "@angular/core/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { AuthPageService } from './authPage.service';

describe('AuthPageService', () => {
    let service: AuthPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Services should be called by the 'providers' not declarations (components)
            providers: [ AuthPageService, provideMockStore({}) ]
        });
        service = TestBed.inject(AuthPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get users', () => {
        expect(service.getUsers().length).toBeGreaterThanOrEqual(0);
    });
})