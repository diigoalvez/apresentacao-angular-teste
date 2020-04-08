import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

describe('Router Testing', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                MyComponentComponent,
                AppComponent
            ]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('navigate to "my-component" should redirect to /my-component', fakeAsync(() => {
        router.navigate(['my-component']);
        tick();
        expect(location.path()).toBe('/my-component');
    }));
});
