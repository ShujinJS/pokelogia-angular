import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { AuthPageService } from './authPage.service';

describe('AuthPageService', () => {
    let service: AuthPageService;
    let serviceSpy: jasmine.Spy;

    beforeEach( waitForAsync( () => {
        TestBed.configureTestingModule({
            providers: [ AuthPageService, provideMockStore({})]
        }).compileComponents();

        service = TestBed.inject(AuthPageService);
        serviceSpy = spyOn(service, 'signUserIn');
        // serviceSpy = jasmine.createSpyObj(service, ['signUserIn', 'logUserIn'])
        // service = TestBed.inject(AuthPageService);

        // TestBed.configureTestingModule({
        //     // Services should be called by the 'providers' not declarations (components)
        //     providers: [ 
        //         AuthPageService, 
        //         { provide: AuthPageService, useValue: serviceSpy },
        //         provideMockStore({}),
        //     ]
        // }).compileComponents();
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should sign user in', () => {
        // expect(service.signUserIn).toHaveBeenCalled();
    })

    it('should get users', () => {
        expect(service.getUsers().length).toBeGreaterThanOrEqual(0);
    });

})