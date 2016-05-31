import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-baselist',
  templateUrl: 'baselist.component.html',
  styleUrls: ['baselist.component.css'],
  directives: [ListComponent]
})
export class BaselistComponent implements OnInit {
  items:any[] = [
    {"name": "颜色", id: './color'},
    {"name": "字体", id: './font'},
    {"name": "布局"},
    {"name": "网格"},
    {"name": "箭头链接"},
    {"name": "1px解决方案"},
    {"name": "文字截断"},
    {"name": "占位"},
    {"name": "两端留白"},
    {"name": "两端对齐"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
