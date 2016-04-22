import {Component} from 'angular2/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'gf-dropmenu',
  templateUrl: './dropmenu.component.html',
  styleUrls: ['./dropmenu.component.css']
})
export class DropmenuComponent {
  menus:MenuComponent[] = [];

  get isOpen() {
    return this.menus.some((m)=>m.active === true);
  }

  select(menu:MenuComponent) {
    if (menu.active === true) {
      menu.active = false;
      return;
    }
    this.menus.forEach((m:MenuComponent)=>m.active = false);
    menu.active = true;
  }

  close() {
    this.menus.forEach((m:MenuComponent)=>m.active = false);
  }

  addMenu(menu:MenuComponent) {
    this.menus.push(menu);
  }
}

