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
var BaselistComponent = (function () {
    function BaselistComponent() {
        this.items = [
            { "name": "颜色", id: './color' },
            { "name": "字体", id: './font' },
            { "name": "布局" },
            { "name": "网格" },
            { "name": "箭头链接" },
            { "name": "1px解决方案" },
            { "name": "文字截断" },
            { "name": "占位" },
            { "name": "两端留白" },
            { "name": "两端对齐" }
        ];
    }
    BaselistComponent.prototype.ngOnInit = function () {
    };
    BaselistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-baselist',
            templateUrl: 'baselist.component.html',
            styleUrls: ['baselist.component.css'],
            directives: [shared_1.ListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BaselistComponent);
    return BaselistComponent;
}());
exports.BaselistComponent = BaselistComponent;
//# sourceMappingURL=baselist.component.js.map