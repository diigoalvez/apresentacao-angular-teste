import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: MyServiceService) { }

  ngOnInit() {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
