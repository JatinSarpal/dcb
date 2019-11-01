import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path: any;

  constructor(private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.path = this.router.url;
    console.log(this.path)
  }
  
}
