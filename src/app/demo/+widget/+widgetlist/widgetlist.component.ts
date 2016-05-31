import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-widgetlist',
  templateUrl: 'widgetlist.component.html',
  styleUrls: ['widgetlist.component.css'],
  directives: [ListComponent]
})
export class WidgetlistComponent implements OnInit {

  items:any[] = [
    {name: '弹出框'},
    {name: '提示框'},
    {name: 'bottom sheet'},
    {name: '选项卡'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
