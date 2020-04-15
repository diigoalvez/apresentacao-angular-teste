import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {

  let serviceInstance: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceInstance = TestBed.get(MyServiceService);
  });

  afterEach(() => {
    serviceInstance = null;
    localStorage.removeItem('token_apresentacao');
  });

  it('should be created', () => {
    expect(serviceInstance).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token_apresentacao', '123');
    expect(serviceInstance.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is not a token', () => {
    expect(serviceInstance.isAuthenticated()).toBeFalsy();
  });
});
