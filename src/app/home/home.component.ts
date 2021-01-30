import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activity = "ACTIVITY";
  activityQuote = "Stay active and enjoy better health and more fun!";
  community = "COMMUNITY";
  communityQuote = "Get to know more people and share your passion";
  challenge = "CHALLENGE";
  challengeQuote = "Never stop challenging yourself everyday";
  
  constructor() { }

  ngOnInit(): void {
  }

}
