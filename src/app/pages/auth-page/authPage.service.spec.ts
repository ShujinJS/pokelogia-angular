import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { AuthPageService } from './authPage.service';
import { Store } from "@ngrx/store";

describe('AuthPageService', () => {
    let service: AuthPageService,
        serviceSpy: any;

    beforeEach( waitForAsync( () => {
        TestBed.configureTestingModule({
            providers: [ AuthPageService, provideMockStore({})]
        }).compileComponents();

        service = TestBed.inject(AuthPageService);
        serviceSpy = jasmine.createSpyObj('AuthPageService', ['getUsers', 'signUserIn', 'logUserIn'])
        // const spyUsers = spyOn(service, 'getUsers').and.returnValue([
        //     {username: 'testUser', password: '1234'},
        // ])
        // Alternative way
        // serviceSpy = spyOn(service, 'signUserIn');
        // serviceSpy = jasmine.createSpyObj('AuthPageService', ['getUsers', 'signUserIn', 'logUserIn'])

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

    it('should get users', () => {
        const spyUsers = spyOn(service, 'getUsers').and.returnValue([
            {username: 'testUser', password: '1234'},
        ])
        expect(service.getUsers().length).toBeGreaterThanOrEqual(1, 'users array have no length');        
        // expect(serviceSpy.getUsers.length).toBeGreaterThanOrEqual(1)
    });

    it('should sign user in', () => {
        pending();
        // expect(service.signUserIn).toHaveBeenCalled();
    });
});