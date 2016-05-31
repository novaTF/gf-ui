import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, Routes, RouteSegment, RouteTree, OnActivate} from '@angular/router';
import {TabContainerComponent, TabComponent} from 'gfui';
import {BaseComponent} from './+base';
import {UiComponent} from './+ui';
import {WidgetComponent} from './+widget';
import {HeaderComponent} from './shared/index';
import {Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'demo',
  templateUrl: 'demo.component.html',
  // styleUrls: ['demo.component.css'],
  directives: [TabContainerComponent, TabComponent, HeaderComponent, ROUTER_DIRECTIVES],
  providers: [Title]
})
@Routes([
  {path: '/base', component: BaseComponent},
  {path: '/ui', component: UiComponent},
  {path: '/widget', component: WidgetComponent}
])
export class DemoComponent implements OnInit, OnActivate {
  tabs:any[] = [
    {title: '基础样式', id: './base'},
    {title: 'UI组件', id: './ui'},
    {title: 'JS插件', id: './widget'}
  ];
  selected:any = this.tabs[0];
  currSegment:RouteSegment;

  onNavClick(tab) {
    this.selected = tab;
    this.router.navigate([tab.id], this.currSegment);
    this.title.setTitle(tab.title);
  }

  routerOnActivate(curr:RouteSegment, prev:RouteSegment, currTree:RouteTree) {
    this.currSegment = curr;
  }

  constructor(private router:Router, private title: Title) {
  }

  ngOnInit() {
    this.router.navigate(['./base'], this.currSegment);
  }
}
