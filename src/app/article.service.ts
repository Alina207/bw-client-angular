import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  BASE_URL: string = 'http://localhost:3000'

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/articles`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/articles/${id}`)
      .toPromise()
      .then(apiResponse => apiResponse.json()
    ).catch(apiResponse => console.log("This errored ooopsie " + apiResponse))
  }


  create(item) {

    const options = { withCredentials: true };

    console.log('create', item);

    return this.myHttp.post(`${this.BASE_URL}/api/articles`, item, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

}
