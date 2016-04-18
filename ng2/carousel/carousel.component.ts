import {Component, Input, HostListener, ElementRef, Inject, AfterViewInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SlideComponent} from './slide.component';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'gf-carousel',
  moduleId: module.id,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  directives: [NgFor]
})
export class CarouselComponent implements AfterViewInit {
  @Input()
  config:any = {
    auto: true,
    speed: 5000,
    bullet: true
  };

  slides:SlideComponent[] = [];
  curIndex:number = 0;
  touching:boolean = false;
  touchStartX:number = 0;
  touchRelatX:number = 0;
  deltaX:number = 0; //根基curIndex计算出位移
  offsetWidth:number = 0;

  constructor(@Inject(ElementRef)
              private elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    this.offsetWidth = this.elementRef.nativeElement.offsetWidth;
    if (this.config.auto) {
      let speed = this.config.speed;
      Observable.timer(speed, speed).subscribe(()=>this.curIndex < this.slides.length -
      1 && !this.touching ? this.next() : this.first());
    }
  }

  get slideWidth() {
    return `${(this.slides.length + 1) * 100}%`;
  }

  get transform() {
    let rx = 0;
    if (this.touching) {
      rx = (this.touchRelatX / this.offsetWidth / this.slides.length - this.deltaX ) * 100;
    } else {
      rx = -this.deltaX * 100;
    }
    return `translateX(${rx}%)`;
  }

  get transition() {
    return this.touching ? '' : `transform 0.5s`;
  }

  addItem(item:SlideComponent) {
    item.index = this.slides.length;
    this.slides.push(item);
  }

  removeItem(item:SlideComponent) {
    let len = this.slides.length;
    if (len === 0) {
      return;
    }
    this.slides.slice(item.index, 1);
    for (let i = 0; i < len; i++) {
      this.slides[i].index = i;
    }
  }

  updateDeltaX() {
    this.deltaX = this.slides.length === 0 ? 0 : this.curIndex / (this.slides.length + 1);
  }

  first() {
    this.curIndex = 0;
    this.updateDeltaX();
  }

  next() {
    this.curIndex++;
    this.updateDeltaX();
  }

  prev() {
    this.curIndex--;
    this.updateDeltaX();
  }

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(e) {
    if (this.curIndex < this.slides.length - 1) {
      this.next();
    }
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight(e) {
    if (this.curIndex > 0)
      this.prev();
  }

  @HostListener('touchstart', ['$event.touches[0].clientX'])
  onTouchStart(clientX) {
    this.touching = true;
    this.touchStartX = clientX;
    this.touchRelatX = 0;
  }

  @HostListener('touchmove', ['$event.touches[0].clientX'])
  onTouchMove(clientX) {
    this.touchRelatX = clientX - this.touchStartX;
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.touching = false;
  }
}

