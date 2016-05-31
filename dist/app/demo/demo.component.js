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
var gfui_1 = require('gfui');
var _base_1 = require('./+base');
var _ui_1 = require('./+ui');
var _widget_1 = require('./+widget');
var index_1 = require('./shared/index');
var platform_browser_1 = require('@angular/platform-browser');
var DemoComponent = (function () {
    function DemoComponent(router, title) {
        this.router = router;
        this.title = title;
        this.tabs = [
            { title: '基础样式', id: './base' },
            { title: 'UI组件', id: './ui' },
            { title: 'JS插件', id: './widget' }
        ];
        this.selected = this.tabs[0];
    }
    DemoComponent.prototype.onNavClick = function (tab) {
        this.selected = tab;
        this.router.navigate([tab.id], this.currSegment);
        this.title.setTitle(tab.title);
    };
    DemoComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
        this.currSegment = curr;
    };
    DemoComponent.prototype.ngOnInit = function () {
        this.router.navigate(['./base'], this.currSegment);
    };
    DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo',
            templateUrl: 'demo.component.html',
            // styleUrls: ['demo.component.css'],
            directives: [gfui_1.TabContainerComponent, gfui_1.TabComponent, index_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
            providers: [platform_browser_1.Title]
        }),
        router_1.Routes([
            { path: '/base', component: _base_1.BaseComponent },
            { path: '/ui', component: _ui_1.UiComponent },
            { path: '/widget', component: _widget_1.WidgetComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.Title])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map