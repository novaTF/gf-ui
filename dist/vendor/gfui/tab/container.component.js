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
var TabContainerComponent = (function () {
    function TabContainerComponent() {
        this.tabs = [];
    }
    TabContainerComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            this.select(tab);
        }
        this.tabs.push(tab);
    };
    TabContainerComponent.prototype.select = function (tab) {
        this.tabs.forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    TabContainerComponent = __decorate([
        core_1.Component({
            selector: 'tab-container',
            template: "<ul class=\"gf-list gf-list-horizon gf-list-center gf-list-border-b  no-padding gf-font-tab-title ui-tab-title\">   <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.active\" (click)=\"select(tab)\"><a>{{tab.title}}</a></li> </ul> <ng-content></ng-content>",
            styles: [":host .ui-tab-title {   height: .47rem;   -webkit-box-sizing: border-box;           box-sizing: border-box; }   :host .ui-tab-title .active a {     display: inline-block;     height: .47rem;     line-height: .47rem;     -webkit-box-sizing: border-box;             box-sizing: border-box;     color: #217de4;     border-bottom: 2px #217de4 solid; }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TabContainerComponent);
    return TabContainerComponent;
}());
exports.TabContainerComponent = TabContainerComponent;
