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
var dropmenu_component_1 = require('../dropmenu/dropmenu.component');
var MenuComponent = (function () {
    function MenuComponent(dropmenu) {
        this.dropmenu = dropmenu;
        this.onSelect = new core_1.EventEmitter();
        dropmenu.addMenu(this);
    }
    MenuComponent.prototype.select = function (item) {
        this.active = false; //选择后关闭面板
        if (item.value === this.selected && !this.isToggleMod)
            return; //如果已选中, 并且未开启toggle模式, 则不做处理
        if (item.value === this.selected && this.isToggleMod) {
            this.selected = undefined; //如果已经选中, 并且开启toggle模式, 设选中元素为undefined.
        }
        else {
            this.selected = item.value;
        }
        //触发事件
        var event = new Event('onSelect');
        event.value = this.selected;
        event.field = this.title.value;
        this.onSelect.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MenuComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MenuComponent.prototype, "active", void 0);
    __decorate([
        // 是否展开
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MenuComponent.prototype, "horizon", void 0);
    __decorate([
        // 是否水平展示
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MenuComponent.prototype, "isToggleMod", void 0);
    __decorate([
        // 如果开启toggle模式, 再次点击已选中的item可以取消选中
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MenuComponent.prototype, "onSelect", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'gf-menu',
            moduleId: module.id,
            template: "<ul class=\"gf-list gf-list-pure gf-list-noBottom gf-list-border-b \" [class.gf-list-horizon]=\"horizon\" [style.display]=\"active?'':'none'\">   <li *ngFor=\"let item of items\" [class.active]=\"selected==item.value\" (click)=\"select(item)\">{{item.name}}<i class=\"icon-gfui icon-check\"></i></li> </ul>",
            styles: [".icon-gfui, :host > ul li.active .icon-check, :host .gf-list-horizon li.active .icon-check {   background-image: url(\"http://cdndev.gf.com.cn/gfwealth/common/gfui/assets/images/sprite-gfui.png\"); }  @media (-webkit-min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 1.9791666666666667), (min-resolution: 190dpi) {   .icon-gfui, :host > ul li.active .icon-check, :host .gf-list-horizon li.active .icon-check {     background-image: url(\"http://cdndev.gf.com.cn/gfwealth/common/gfui/assets/images/sprite-gfui@2x.png\");     -webkit-background-size: 69px 53px;             background-size: 69px 53px; } }  .icon-gfui-arr-right {   background-position: -44px 0px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 12px;   height: 20px; }  .icon-gfui-check-hook {   background-position: 0px -39px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 17px;   height: 14px; }  .icon-gfui-check {   background-position: 0px -22px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 17px;   height: 17px; }  .icon-gfui-del {   background-position: -17px -39px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 14px;   height: 13px; }  .icon-gfui-error {   background-position: -17px -22px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 16px;   height: 16px; }  .icon-gfui-fav-active {   background-position: -31px -39px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 13px;   height: 13px; }  .icon-gfui-star1 {   background-position: -44px -39px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 13px;   height: 12px; }  .icon-gfui-star2 {   background-position: -56px 0px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 13px;   height: 12px; }  .icon-gfui-toast-succ {   background-position: 0px 0px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 22px;   height: 22px; }  .icon-gfui-toast-warn {   background-position: -22px 0px;   background-repeat: no-repeat;   overflow: hidden;   display: inline-block;   width: 22px;   height: 22px; }  :host > ul {   position: absolute; }   :host > ul li.active {     color: #217de4 !important; }     :host > ul li.active .icon-check {       background-position: 0px -39px;       background-repeat: no-repeat;       overflow: hidden;       display: block;       width: 17px;       height: 14px;       display: inline-block;       position: absolute;       right: .15rem; }  :host .gf-list-horizon {   -webkit-flex-wrap: wrap;           flex-wrap: wrap;   -webkit-box-sizing: border-box;           box-sizing: border-box;   padding: .15rem 0; }   :host .gf-list-horizon li {     width: 1.03rem;     height: .35rem;     line-height: .35rem;     text-align: center;     -webkit-box-flex: 0;     -webkit-flex: 0 1 auto;             flex: 0 1 auto;     padding: 0;     margin-left: .15rem;     margin-bottom: .15rem;     border: solid 1px #cccccc;     -webkit-border-radius: .05rem;             border-radius: .05rem; }     :host .gf-list-horizon li.active {       border-color: #0061b3; }       :host .gf-list-horizon li.active .icon-check {         display: inline-block;         position: absolute;         right: -.04rem;         top: -.02rem;         background-position: 0px -22px;         background-repeat: no-repeat;         overflow: hidden;         display: block;         width: 17px;         height: 17px; }"]
        }), 
        __metadata('design:paramtypes', [dropmenu_component_1.DropmenuComponent])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
