import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
  BASE_URL: string = ''
  constructor(private myHttp: Http) { }

  signup (user) {
    const theOriginalPromise = this.myHttp.post(this.BASE_URL+'/signup', user).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  login (credentials) {
    const options = { withCredentials: true };
    const theOriginalPromise = this.myHttp.post(this.BASE_URL+'/login', credentials, options).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {
    const options = { withCredentials: true };
    return this.myHttp.post(this.BASE_URL+'/logout', {})
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    const options = { withCredentials: true };
    return this.myHttp.get(this.BASE_URL+'/loggedin', options)
      .toPromise()
      .then(result => result.json());
  }

  getPrivate () {
    const options = { withCredentials: true };
    return this.myHttp.get(this.BASE_URL+'/private')
      .toPromise()
      .then(result => result.json());
  }

}
