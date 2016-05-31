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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dir_1 = require('@angular2-material/core/rtl/dir');
var button_1 = require('@angular2-material/button/button');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var list_1 = require('@angular2-material/list/list');
var icon_1 = require('@angular2-material/icon/icon');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var tabs_1 = require('@angular2-material/tabs/tabs');
var input_1 = require('@angular2-material/input/input');
var HomeComponent = (function () {
    function HomeComponent() {
        this.tabs = [{
                label: '快速开始',
                content: '快速开始'
            }, {
                label: '基础组件',
                content: '基础组件'
            }, {
                label: 'NG2组件',
                content: 'NG2组件'
            }, {
                label: 'Demo',
                content: 'Demo'
            }, {
                label: 'Github',
                content: 'Github'
            }];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                dir_1.Dir,
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                toolbar_1.MdToolbar,
                tabs_1.MD_TABS_DIRECTIVES,
                input_1.MdInput
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map