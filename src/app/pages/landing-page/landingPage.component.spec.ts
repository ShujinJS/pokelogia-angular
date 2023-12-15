import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landingPage.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ LandingPageComponent ],
            imports: [ HttpClientModule ],
            providers: [ provideMockStore({}) ]
        })
        .compileComponents()
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should have a header text`, () => {
        expect(component.landingHeader).toBeDefined();
    });
});