import { MyServiceService } from './my-service.service';

export class MockedMyServiceClass extends MyServiceService {
    authenticated = false;

    isAuthenticated() {
        return this.authenticated;
    }
}
