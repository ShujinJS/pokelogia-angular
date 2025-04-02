import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AuthPageComponent } from './authPage.component';
import { AuthPageService } from './authPage.service';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('AuthPageComponent', () => {
    let fixture: ComponentFixture<AuthPageComponent>;
    let component: AuthPageComponent;
    let service: AuthPageService;
    let serviceSpy: jasmine.Spy;

    beforeEach( waitForAsync( () => {
        TestBed.configureTestingModule({
            declarations: [ AuthPageComponent ],
            imports: [ ReactiveFormsModule ],
            providers: [ AuthPageService, provideMockStore({}) ],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;

        service = TestBed.inject(AuthPageService);
        serviceSpy = spyOn(service, 'getUsers').and.returnValue([
            {username: 'testUser', password: '1234'},
        ])

        fixture.detectChanges();
    }));

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should get users on init', () => {
        fixture.detectChanges();
        // this resets to not have calls
        // serviceSpy.calls.reset(); 

        // this expects it to have been called
        expect(serviceSpy).toHaveBeenCalled();
    });
});