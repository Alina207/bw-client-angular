import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SessionService]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
