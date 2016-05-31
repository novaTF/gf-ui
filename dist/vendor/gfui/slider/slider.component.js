"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var iSlider = require('islider.js/build/iSlider');
var SliderComponent = (function () {
    function SliderComponent(elementRef) {
        this.elementRef = elementRef;
        //add dot plugin
        iSlider.regPlugin('dot', function (opts) {
            var HANDLE = this;
            var data = HANDLE.data;
            var dots = [];
            var evtHandle = [];
            var endEvt = HANDLE.deviceEvents.endEvt;
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
                }
                else if (Boolean(locate.nodeName) && Boolean(locate.nodeType)) {
                    return locate;
                }
                return HANDLE.wrap.parentNode;
            }
        });
    }
    Object.defineProperty(SliderComponent.prototype, "items", {
        set: function (items) {
            if (items && items.length) {
                var list = items.map(function (item) {
                    return { content: "<a href=\"" + item.href + "\"><img src=\"" + item.src + "\" alt=\"" + item.alt + "\"></a>" };
                });
                this.slider = new iSlider(this.elementRef.nativeElement, list, this.config || {
                    isAutoplay: 1,
                    isLooping: 1,
                    isOverspread: 1,
                    animateTime: 500,
                    duration: 4000,
                    plugins: [['dot', { locate: this.elementRef.nativeElement }]]
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SliderComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SliderComponent.prototype, "items", null);
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            template: "",
            styles: [":host {   height: 1.5rem;   width: 100%;   display: block;   position: relative;   overflow: hidden; }   :host .islider-outer li, :host img {     position: absolute;     height: 1.5rem;     width: 100%; }   :host .islider-dot-wrap {     position: absolute;     bottom: 5px;     left: 0;     text-align: center;     width: 100%; }     :host .islider-dot-wrap .islider-dot {       width: 8px;       height: 8px;       display: inline-block;       -webkit-border-radius: 100%;               border-radius: 100%;       background: #fff;       border: 1px #c7c3bf solid;       margin-right: 5px; }       :host .islider-dot-wrap .islider-dot.active {         background: #ef7f42;         border-color: #ef7f42; }"]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
