import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  BASE_URL: string = ''

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/articles`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
      .catch(apiResponse => console.log(apiResponse))
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
