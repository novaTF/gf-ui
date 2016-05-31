import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-uilist',
  templateUrl: 'uilist.component.html',
  styleUrls: ['uilist.component.css'],
  directives: [ListComponent]
})
export class UilistComponent implements OnInit {

  items:any [] = [
    {name: '按钮', id: './botton'},
    {name: '列表', id: './listCmp'},
    {name: '弹窗', id: './dialog'},
    {name: '底部菜单栏', id: './menu'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
