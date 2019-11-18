import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path: any;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.path = this.router.url;
  }

  ngOnInit() {
 if (this.path === '/home'){
    $(".home").css({"font-weight":"800"})
 }
 if (this.path === '/projects'){
  $(".project-link").css({"font-weight":"800"})
}
if (this.path === '/interior'){
  $( ".intelink").css({"font-weight":"800"})
}
if (this.path === '/aboutus'){
  $( ".about-link").css({"font-weight":"800"})
}

this.projectdrop();

  }
 
projectdrop () {
  if (this.path === '/projects/cottagepoint'){
    $('.nav-link').addClass('animatedcottagepoint')
    $('.project-link').addClass('cottagepointproject')
    $(".project-link").css({"font-weight":"800"})
    $(".house1").css({"font-weight":"800"})
    }
    if (this.path === '/projects/castlecrag'){
      $('.nav-link').addClass('animatedcastlecraq')
      $('.project-link').addClass('castlecraqproject')
    $(".project-link").css({"font-weight":"800"})
    $(".house2").css({"font-weight":"800"})
      }
      if (this.path === '/projects/lanecove'){
        $('.nav-link').addClass('animatedlanecove')
        $('.project-link').addClass('lanecoveproject')
    $(".project-link").css({"font-weight":"800"})
    $(".house3").css({"font-weight":"800"})
        
        }
        if (this.path === '/projects/woollahra'){
          $('.nav-link').addClass('animatedlanecove')
          $('.project-link').addClass('lanecoveproject')
    $(".project-link").css({"font-weight":"800"})
    $(".house4").css({"font-weight":"800"})
          
          }
}
  }
