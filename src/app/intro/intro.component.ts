import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro={
    // tagline:'SUCCESS',
    // title:'How We Help You To Sell Your Product',
    // description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'

  };
  

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.intro=this.getIntro();
  }

  getIntro(){
    return this.config.getConfig().intro;
  }

}
