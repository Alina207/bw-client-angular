import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
declare var jQuery:any;
declare var $:any;

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


  constructor(private mySession: SessionService) {}

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    console.log(this.mySession);
    this.mySession.isLoggedIn()
      .then(userInfo => this.user = userInfo);
  }


  logout() {
    this.mySession.logout()
      .then(() => {
        this.user = null;
        this.error = null;
        console.log("User logged out");
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
