import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  isAuthenticated() {
    return !!localStorage.getItem('token_apresentacao');
  }
}
