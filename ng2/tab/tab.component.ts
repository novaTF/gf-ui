import {Component, Input} from '@angular/core';
import {TabContainerComponent} from './container.component';
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input()
  title:string;

  @Input()
  active:boolean;

  constructor(private container:TabContainerComponent) {
    container.addTab(this);
  }
}
