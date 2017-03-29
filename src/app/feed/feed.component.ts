import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionService } from '../session.service';
import { ArticleService } from '../article.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [SessionService, ArticleService]
})

export class FeedComponent implements OnInit {

  articles: Array<any> = [];
  errorMessage: string = '';
  newFeed: Object = {};
  date: Date;
  username: string = '';
  userId: string = '';

  constructor(private articleService: ArticleService, private sessionService: SessionService) { }

  ngOnInit() { // gets all articles and lists them
    this.articleService.getList()
      .then( apiResult => this.articles = apiResult )
      .catch( err => this.errorMessage = 'There was an error. Try again later')
  }

  submitNewFeed() { // adds new articles
    const item: any = this.newFeed;
      this.sessionService.isLoggedIn()
          .then((userInfoResult) => {
            item.userId = userInfoResult._id;
            item.username = userInfoResult.username;
            this.date = new Date();
            item.date = this.date;
      this.articleService.create(item) //sending the whole object to the server not just the ID
          .then((apiResult) => {
            console.log(apiResult);
          })
          .catch((err) => {
            console.log("Error!", err);
          })
        })
  }


}

// interface Article{
//   _id: String,
//   author: String,
//   title: String,
//   image: String,
//   url: String,
//   username: String,
//   //  comments:
//   // upvotes: Number,
//   // downvotes: Number;
// }
