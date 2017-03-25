import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';

//import your components here
const routes: Routes = [
  { // http://localhost:4200/about
    path: 'about',
    component: AboutComponent,
  },
  { // http://localhost:4200/profile/:d
    path: 'profile/:id',
    component: ProfileComponent,
  },
  { // http://localhost:4200/feed
    path: 'feed',
    component: FeedComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
