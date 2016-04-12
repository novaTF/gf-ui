import {Component} from 'angular2/core';
import {TabComponent} from './tab.component';
@Component({
  selector: 'tab-container',
  moduleId: module.id,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class TabContainerComponent {
  tabs:TabComponent[] = [];

  addTab(tab:TabComponent) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }

  select(tab:TabComponent) {
    this.tabs.forEach((t)=>t.active = false);
    tab.active = true;
  }
}
