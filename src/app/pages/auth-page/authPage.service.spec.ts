import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { AuthPageService } from './authPage.service';
import { Store } from "@ngrx/store";

// by adding 'x' before the 'describe' : you can skip this suite or individual 'it' units with the same pattern.
// by adding 'f' before the 'describe' : you can focus and only test this particular suite or unit with the same pattern.
describe('AuthPageService', () => {
    let service: AuthPageService,
        serviceSpy: jasmine.SpyObj<AuthPageService>;
    const stubUsersValue = [{username: 'testUser', password: '1234'}];
    const stubAuthValue = { isLoggedIn: true, username: 'testUser', isRemember: false }
    beforeEach( waitForAsync( () => {

        serviceSpy = jasmine.createSpyObj('AuthPageService', ['getUsers', 'signUserIn', 'logUserIn'])

        TestBed.configureTestingModule({
            providers: [ 
                { provide: service, useValue: serviceSpy }, 
                provideMockStore({})
            ]
        }).compileComponents();

        service = TestBed.inject(AuthPageService) as jasmine.SpyObj<AuthPageService>;
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
        serviceSpy.getUsers.and.returnValue(stubUsersValue);

        expect(service.getUsers())
            .withContext('no user found!')
            .toEqual(stubUsersValue);

        expect(serviceSpy.getUsers())
            .withContext('spy getUsers called once')
            .toHaveBeenCalledTimes(1);

        expect(serviceSpy.getUsers.calls.mostRecent().returnValue).toEqual(stubUsersValue)
    });

    it('should sign user in', () => {
        pending();
        // expect(service.signUserIn).toHaveBeenCalled();
    });

    it('should log user in', () => {


    });
});