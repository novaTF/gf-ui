import {Component, ElementRef, Inject, Input} from 'angular2/core';
import * as iSlider from './islider';
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  moduleId: module.id,
  styleUrls: ['./slider.component.css']
})

export class SliderComponent {
  slider:iSlider;

  @Input()
  config:any;

  @Input()
  set items(items:any[]) {
    if (items && items.length) {
      let list = items.map((item)=> {
        return {content: `<a href="${item.href}"><img src="${item.src}" alt="${item.alt}"></a>`};
      });
      this.slider = new iSlider(this.elementRef.nativeElement, list, this.config || {
          isAutoplay: 1,
          isLooping: 1,
          isOverspread: 1,
          animateTime: 500,
          duration: 4000,
          plugins: [['dot', {locate: this.elementRef.nativeElement}]]
        });
    }
  }

  constructor(@Inject(ElementRef)
              private elementRef:ElementRef) {
  }
}
