import {Component, OnDestroy, Input} from 'angular2/core';
import {CarouselComponent} from './carousel.component';

@Component({
  selector: 'slide',
  moduleId: module.id,
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnDestroy {
  index:number;
  @Input()
  src:string;
  @Input()
  href:string;
  @Input()
  alt:string;

  constructor(private carousel:CarouselComponent) {
    this.carousel.addItem(this);
  }

  ngOnDestroy() {
    this.carousel.removeItem(this);
  }
}
