import { Component, OnInit, ViewChild } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DCB';
  @ViewChild('slideshow') slideshow: any;
  constructor (){

  }
  ngOnInit() {
    // setTimeout(() => {
    //   console.log('adding an image url dynamically.');
    //   this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    // }, 2000);
    // this.slideshow.goToSlide(3);
  }
  // imageUrls: (string | IImage)[] = [
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
  //   'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
  //   { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  // ];
  // ngAfterViewInit() {
  //   console.log(this.slideshow.nativeElement.value);
  // }
  // testEvent(event) {
  //   console.log(typeof event);
  //   console.log(event);
  // }
}
