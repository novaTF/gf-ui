import {Component} from '@angular/core';
import {TabComponent} from './tab.component';
@Component({
  selector: 'tab-container',
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
    this.tabs.forEach((t:TabComponent)=>t.active = false);
    tab.active = true;
  }
}
