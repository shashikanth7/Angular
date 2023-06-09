import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sliderview',
  templateUrl: './sliderview.component.html',
  styleUrls: ['./sliderview.component.css']
})
export class SliderviewComponent implements OnInit, OnDestroy {
  @ViewChild('slideshow') slideshow!: ElementRef<HTMLImageElement>;

  images = ["http://localhost/imgpi.jpg", "http://localhost/img2.jpg", "http://localhost/img3.jpg"];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
