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
var platform_browser_1 = require('@angular/platform-browser');
var ListComponent = (function () {
    function ListComponent(router, curr, title) {
        this.router = router;
        this.title = title;
        this.currSegment = curr;
    }
    ListComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
        this.currSegment = curr;
    };
    ListComponent.prototype.ngOnInit = function () {
        this.items.some(function (item) {
            item.isDefault && this.router.navigate(item.id, this.currSegment);
            return false;
        });
    };
    ListComponent.prototype.onSelect = function (item) {
        if (item.id) {
            this.router.navigate([item.id], this.currSegment);
            this.title.setTitle(item.name);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListComponent.prototype, "items", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteSegment, platform_browser_1.Title])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map