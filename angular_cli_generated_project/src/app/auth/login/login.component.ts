import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, UtilService } from "../../shared/services/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  credentialsError = false;
  loading = false;

  constructor(
    private router: Router,
    private utilService: UtilService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.utilService.setTitle('Login');
    this.authenticationService.logout();
  }

  login() {
    this.credentialsError = false;
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.credentialsError = false;
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
          this.credentialsError = true;
        });
  }
}
