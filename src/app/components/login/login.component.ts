import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user;
  public token;
  public identity;
  public data_error;

  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit(): void {}

  close_alert() {
    this.data_error = '';
  }

  login(loginForm) {
    if (loginForm.valid) {
      this._userService.login(this.user).subscribe(
        (response) => {
          this.token = response.jwt;
          localStorage.setItem('token', this.token);

          this._userService.login(this.user, true).subscribe(
            (response) => {
              localStorage.setItem('identity', JSON.stringify(response.user));
              this._router.navigate(['dashboard']);
            },
            (error) => {}
          );
        },
        (error) => {
          this.data_error = error.error.message;
        }
      );
    } else {
    }
  }
}
