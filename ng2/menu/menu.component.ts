import {Component, Input} from 'angular2/core';
import {DropmenuComponent} from  '../dropmenu/dropmenu.component';

@Component({
  selector: 'gf-menu',
  moduleId: module.id,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input()
  title:string;

  @Input()
  items:Array<string>;

  /**
   * 激活状态
   */
  @Input()
  active:boolean;

  /**
   * 是否水平显示
   */
  @Input()
  horizon:boolean;

  @Input()
  selected:string;

  constructor(private dropmenu:DropmenuComponent) {
    dropmenu.addMenu(this);
  }

  select(item:string) {
    this.selected = item;
    //选择后关闭面板
    this.active = false;
  }
}