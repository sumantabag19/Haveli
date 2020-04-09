import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent implements OnInit {
  activetab='home';

  constructor() { }

  ngOnInit() {
  }
  getActiveTab(tabname:string){
    this.activetab=tabname;
  }

}
