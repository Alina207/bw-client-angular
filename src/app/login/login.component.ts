import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionService]
})
export class LoginComponent implements OnInit {

  loginInfo = {};
  signupInfo = {};
  user: any;
  error: string;
  myData: any;

  constructor(private mySession: SessionService, private navigator: Router ) {}

  ngOnInit() {
    console.log(this.mySession);
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }

  isSidenavOpen: boolean = false;

   toggleIcon(){
     this.isSidenavOpen = !this.isSidenavOpen;
   }

   login() {
     const thePromise = this.mySession.login(this.loginInfo);
     console.log(this.loginInfo);
     thePromise.then((userInfo) => {
       console.log(userInfo);
       this.user = userInfo;
       this.error = null;
     });

     thePromise.catch((err) => {
       console.log(err);
       this.user = null;
       this.error = err;
       this.navigator.navigate([''])
     });
   }

   signup() {
     const thePromise = this.mySession.signup(this.signupInfo);

     thePromise.then((userInfo) => {
       this.user = userInfo;
       this.error = null;
       this.navigator.navigate([''])
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
