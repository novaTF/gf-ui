import {Component, ElementRef, Inject, Input} from 'angular2/core';
import iSlider = require('islider.js/build/iSlider');
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent {
  slider:any;

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
    //add dot plugin
    this.slider.regPlugin('dot', (opts)=> {
      let HANDLE:any = this;
      let data = HANDLE.data;
      let dots = [];
      var evtHandle = [];
      let endEvt = HANDLE.deviceEvents.endEvt;

      var dotWrap = document.createElement('ul');
      dotWrap.className = 'islider-dot-wrap';

      renderDots();

      locate(opts && opts.locate != null ? opts.locate : false)
        .appendChild(dotWrap);

      HANDLE.on('slideChange', function () {
        for (var i = 0; i < data.length; i++) {
          dots[i].className = 'islider-dot';
          if (i === this.slideIndex) {
            dots[i].className += ' active';
          }
        }
      });

      HANDLE.on('loadData', function () {
        data = this.data;
        renderDots();
      }, 1);

      function renderDots() {
        var fragment = document.createDocumentFragment();
        dots.forEach(function (el, i) {
          el.removeEventListener(endEvt, evtHandle[i], false);
        });
        dots = [], evtHandle = [];
        dotWrap.innerHTML = '';
        for (var i = 0; i < data.length; i++) {
          dots[i] = document.createElement('li');
          dots[i].className = 'islider-dot';
          dots[i].setAttribute('index', i);
          if (i === HANDLE.slideIndex) {
            dots[i].className += ' active';
          }
          evtHandle[i] = function () {
            HANDLE.slideTo(parseInt(this.getAttribute('index'), 10));
          };
          dots[i].addEventListener(endEvt, evtHandle[i], false);
          fragment.appendChild(dots[i]);
        }
        dotWrap.appendChild(fragment);
      }

      function locate(locate) {
        if (locate === 'relative') {
          return HANDLE.wrap;
        } else if (Boolean(locate.nodeName) && Boolean(locate.nodeType)) {
          return locate;
        }
        return HANDLE.wrap.parentNode;
      }
    });
  }
}
