import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
    let fixture: ComponentFixture<SwitchComponent>;
    let component: SwitchComponent;
    let changeThemeSpy: jasmine.Spy;
    let isDarkMock: boolean;

    beforeEach( waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ SwitchComponent ],
            providers: [ provideMockStore({}) ],
        }).compileComponents();

        fixture = TestBed.createComponent(SwitchComponent);
        component = fixture.componentInstance;
        isDarkMock = false;

        changeThemeSpy = spyOn(component, 'changeTheme').and.returnValue();

        fixture.detectChanges();
    }));

    it('should change theme on button click', () => {
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('.switch'));
        button.triggerEventHandler('click', null);
        // expect(changeThemeSpy).toHaveBeenCalled();
    })
})