import {Component, OnInit} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Dir} from '@angular2-material/core/rtl/dir';
import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdIcon} from '@angular2-material/icon/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs/tabs';
import {MdInput} from '@angular2-material/input/input';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    Dir,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MD_TABS_DIRECTIVES,
    MdInput
  ],
})
export class HomeComponent implements OnInit {

  tabs:any = [{
    label: '快速开始',
    content: '快速开始'
  }, {
    label: '基础组件',
    content: '基础组件'
  }, {
    label: 'NG2组件',
    content: 'NG2组件'
  }, {
    label: 'Demo',
    content: 'Demo'
  }, {
    label: 'Github',
    content: 'Github'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
