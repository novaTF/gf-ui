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
var shared_1 = require('../../shared');
var WidgetlistComponent = (function () {
    function WidgetlistComponent() {
        this.items = [
            { name: '弹出框' },
            { name: '提示框' },
            { name: 'bottom sheet' },
            { name: '选项卡' }
        ];
    }
    WidgetlistComponent.prototype.ngOnInit = function () {
    };
    WidgetlistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-widgetlist',
            templateUrl: 'widgetlist.component.html',
            styleUrls: ['widgetlist.component.css'],
            directives: [shared_1.ListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetlistComponent);
    return WidgetlistComponent;
}());
exports.WidgetlistComponent = WidgetlistComponent;
//# sourceMappingURL=widgetlist.component.js.map