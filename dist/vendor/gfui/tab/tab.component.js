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
var core_1 = require('angular2/core');
var container_component_1 = require('./container.component');
var TabComponent = (function () {
    function TabComponent(container) {
        this.container = container;
        container.addTab(this);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "<div class=\"gf-font-small-content tab-content\" [style.display]=\"active?'block':'none'\">   <ng-content></ng-content> </div>",
            styles: [":host .tab-content {   padding: .15rem;   background: #fff;   width: 100%;   -webkit-box-sizing: border-box;           box-sizing: border-box;   line-height: .25rem; }"]
        }), 
        __metadata('design:paramtypes', [container_component_1.TabContainerComponent])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
