import { Component, OnInit } from '@angular/core';

import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent implements OnInit {
  title = 'Baitwatch';

  loginInfo = {};
  signupInfo = {};

  user: any;
  error: string;
  myData: any;
  isLoginFormOpen:boolean = false;
  isSignUpFormOpen:boolean = false;

  constructor(private mySession: SessionService) {}

  ngOnInit() {
    console.log(this.mySession);
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }

 toggleLogin() {
   this.isLoginFormOpen = !this.isLoginFormOpen
 }

  login() {
    const thePromise = this.mySession.login(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  toggleSignUp() {
    this.isSignUpFormOpen = !this.isSignUpFormOpen
  }

  signup() {
    const thePromise = this.mySession.signup(this.signupInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  logout() {
    this.mySession.logout()
      .then(() => {
        this.user = null;
        this.error = null;
      })
      .catch(err => this.error = err);
  }

  getPrivateData() {
    this.mySession.getPrivate()
      .then((data) => {
        this.myData = data;
        this.error = null;
      })
      .catch(err => this.error = err);
  }
}
