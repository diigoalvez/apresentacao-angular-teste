import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MockedMyServiceClass } from 'src/app/services/my-service/my-service.mock';
import { MyServiceService } from 'src/app/services/my-service/my-service.service';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let componentMockingService: LoginComponent;
  let mockedService: MockedMyServiceClass;
  let realService: MyServiceService;

  beforeEach(() => {
    mockedService = new MockedMyServiceClass();
    realService = new MyServiceService();
    component = new LoginComponent(realService);
    componentMockingService = new LoginComponent(mockedService);
  });


  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true if the user is not authenticated using mocked service', () => {
    mockedService.authenticated = false;
    expect(componentMockingService.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false if the user is authenticated using mocked service', () => {
    mockedService.authenticated = true;
    expect(componentMockingService.needsLogin()).toBeFalsy();
  });

  it('needsLogin returns true if the user is not authenticated using real service and spy', () => {
    spyOn(realService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(realService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false if the user is authenticated using real service and spy', () => {
    spyOn(realService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(realService.isAuthenticated).toHaveBeenCalled();
  });
});
