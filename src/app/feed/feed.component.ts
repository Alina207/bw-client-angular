import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleService } from '../article.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  articles: Array<Article>= [];
  errorMessage: string = '';
  newFeed: Object={};

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getList()
      .then( apiResult => this.articles = apiResult )
      .catch( err => this.errorMessage = 'There was an error. Try again later')
  }

  submitNewFeed() {
    const item = this.newFeed;
    this.articleService.create(item)
      .then((apiResult) => {
        console.log(apiResult);
      })
      .catch((err) => {
        console.log("Error!", err);
      })
    // .then( apiResult => this.articles = apiResult )
    // .catch( err => this.errorMessage = 'There was an error. Try again later')
  }


}

interface Article{
  _id: String,
  author: String,
  title: String,
  image: String,
  url: String,
}
