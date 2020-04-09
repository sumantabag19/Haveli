import { Component, OnInit } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog={};

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.blog=this.getblog();
  }
  getblog(){
    return this.config.getConfig().blog;
  }

}
