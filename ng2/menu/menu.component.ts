import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DropmenuComponent} from  '../dropmenu/dropmenu.component';

@Component({
    selector: 'gf-menu',
    moduleId: module.id,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input() title:Object;
    @Input() items:Array<Object>;
    @Input() active:boolean; // 是否展开
    @Input() horizon:boolean; // 是否水平展示
    @Input() isToggleMod:boolean; // 如果开启toggle模式, 再次点击已选中的item可以取消选中
    @Input() selected:any;

    @Output()
    onSelect:EventEmitter<Event> = new EventEmitter();

    constructor(private dropmenu:DropmenuComponent) {
      dropmenu.addMenu(this);
    }

    select(item:Object) {
      this.active = false; //选择后关闭面板
      if (this.equal(this.selected, item.value) && !this.isToggleMod) return; //如果已选中, 并且未开启toggle模式, 则不做处理

      if (this.equal(this.selected, item.value) && this.isToggleMod) {
        this.selected = undefined;  //如果已经选中, 并且开启toggle模式, 设选中元素为undefined.
      } else {
        this.selected = item.value;
      }

      //触发事件
      let event:any = new Event('onSelect');
      event.value = this.selected;
      event.field = this.title.value;
      this.onSelect.emit(event);
    }

    // 如果value为object, 则做进一层判断。
    equal(selectedValue, itemValue) {
      if (typeof selectedValue !== 'object' || typeof selectedValue !== 'object') {
        return selectedValue === itemValue;
      } else if (Object.keys(selectedValue).length !== Object.keys(itemValue).length){
        return false;
      } else {
        let result = true;
        for (let key in selectedValue) {
          result = result && (selectedValue[key] === itemValue[key]);
        }
        return result;
      }
    }
}
