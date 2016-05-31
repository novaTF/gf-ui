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
var UilistComponent = (function () {
    function UilistComponent() {
        this.items = [
            { name: '按钮', id: './botton' },
            { name: '列表', id: './listCmp' },
            { name: '弹窗', id: './dialog' },
            { name: '底部菜单栏', id: './menu' }
        ];
    }
    UilistComponent.prototype.ngOnInit = function () {
    };
    UilistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-uilist',
            templateUrl: 'uilist.component.html',
            styleUrls: ['uilist.component.css'],
            directives: [shared_1.ListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], UilistComponent);
    return UilistComponent;
}());
exports.UilistComponent = UilistComponent;
//# sourceMappingURL=uilist.component.js.map