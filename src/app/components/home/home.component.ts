import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vanish: boolean = true;
  slide1: boolean = false;
  slide2: boolean = false
  slide3: boolean = false
  slide4: boolean = false
  slide5: boolean = false
  slide6: boolean = false
  slideCount = 0;


  // row1:boolean = true;
  // row2:boolean = false;
  // row3:boolean = false;
  // slideCounter = 1;
  // t:any;
  // showimage:boolean = false;
  //   constructor() { 

  //   this.firstSlide();
  //   }

  // firstSlide(){
  //   this.row1 = true;
  //   this.row2 = false;
  //   this.row3 = false;
  //   this.secondSlide();
  // }

  // firstSlideAgain(){
  //   this.row1 = true;
  //   this.row2 = false;
  //   this.row3 = false;
  //   this.secondSlide();
  // }

  // secondSlide(){
  //   setTimeout(()=>{
  //     this.row1 = false;
  //     this.row2 = true;
  //     this.row3 = false;
  //   }, 11500)
  //   this.thirdSlide();
  // }

  // thirdSlide(){
  //   setTimeout(()=>{
  //     this.row1 = false;
  //     this.row2 = false;
  //     this.row3 = true;
  //     setTimeout(()=>{
  //     this.firstSlideAgain();
  //     },3000)
  //   }, 14000)



  // }

  ngOnInit() {
    // window.onload = function () { 
    //   window.setTimeout(vanishText,1400); 
    // } 
    // function vanishText() { 
    //   document.getElementById('makethisvanish').style.opacity = '0';
    // }
    setTimeout(() => {
      this.vanish = false;
    }, 1500)



    setInterval(() => {
      this.slideCount += 1;

      if (this.slideCount === 1) {
        this.slide6 = false;
        this.slide1 = true
      }
      else if (this.slideCount === 2) {
        this.slide1 = false;
        this.slide2 = true;
      } else if (this.slideCount === 3) {
        this.slide2 = false;
        this.slide3 = true;
      } else if (this.slideCount === 4) {
        this.slide3 = false;
        this.slide4 = true;
      } else if (this.slideCount === 5) {
        this.slide4 = false;
        this.slide5 = true;
      } else {
        this.slide5 = false;
        this.slide6 = true;
        this.slideCount = 0;
      }
    }, 2500)

  }




}
