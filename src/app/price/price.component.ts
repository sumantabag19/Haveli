import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  pricing={};

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.pricing=this.getPricing();
  }

  getPricing(){
    return this.config.getConfig().pricing;
  }

}
