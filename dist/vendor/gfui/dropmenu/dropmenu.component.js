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
var DropmenuComponent = (function () {
    function DropmenuComponent() {
        this.menus = [];
    }
    Object.defineProperty(DropmenuComponent.prototype, "isOpen", {
        get: function () {
            return this.menus.some(function (m) { return m.active === true; });
        },
        enumerable: true,
        configurable: true
    });
    DropmenuComponent.prototype.select = function (menu) {
        if (menu.active === true) {
            menu.active = false;
            return;
        }
        this.menus.forEach(function (m) { return m.active = false; });
        menu.active = true;
    };
    DropmenuComponent.prototype.close = function () {
        this.menus.forEach(function (m) { return m.active = false; });
    };
    DropmenuComponent.prototype.addMenu = function (menu) {
        this.menus.push(menu);
    };
    DropmenuComponent = __decorate([
        core_1.Component({
            selector: 'gf-dropmenu',
            template: "<masker [style.display]=\"isOpen?'block':'none'\" (click)=\"close()\"></masker> <div class=\"dropmenu-container\">   <ul class=\"gf-list gf-list-horizon gf-list-center gf-border-b no-padding gf-list-dropdown gf-font-module-title\">     <li *ngFor=\"let menu of menus\" [class.active]=\"menu.active\" (click)=\"select(menu)\">{{menu.title.name}}     </li>   </ul>   <ng-content></ng-content> </div>",
            styles: [":host masker {   position: fixed;   top: 0;   width: 100%;   height: 100%;   background-color: rgba(0, 0, 0, 0.6);   opacity: 0.5;   z-index: 1; }  :host .dropmenu-container {   position: relative;   width: 100%;   z-index: 2; }   :host .dropmenu-container > ul.gf-list {     height: .35rem; }"]
        }), 
        __metadata('design:paramtypes', [])
    ], DropmenuComponent);
    return DropmenuComponent;
}());
exports.DropmenuComponent = DropmenuComponent;
