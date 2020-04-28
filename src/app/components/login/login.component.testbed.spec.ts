import { LoginComponent } from "./login.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyServiceService } from 'src/app/services/my-service/my-service.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Login Using TestBed', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: MyServiceService;
    let element: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [MyServiceService]
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        service = TestBed.get(MyServiceService);
        element = fixture.debugElement.query(By.css('button'));
    });

    afterEach(() => {
        fixture = null;
        component = null;
        service = null;
    });

    it('needsLogin returns true if the user is not authenticated using real service and spy', () => {
        spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

    it('needsLogin returns false if the user is authenticated using real service and spy', () => {
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });

    it('loginButton should be hidden when user is authenticated', () => {
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        fixture.detectChanges();
        expect(element.nativeElement.getAttribute('hidden')).toEqual('');
    });

    it('loginButton should display when user is not authenticated', () => {
        spyOn(service, 'isAuthenticated').and.returnValue(false);
        fixture.detectChanges();
        expect(element.nativeElement.getAttribute('hidden')).toBeNull();
    });

});
