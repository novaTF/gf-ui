import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';

import {Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ListComponent implements OnInit {
  currSegment:RouteSegment;

  @Input()
  items:any[];

  constructor(private router:Router, curr:RouteSegment, private title:Title) {
    this.currSegment = curr;
  }

  routerOnActivate(curr:RouteSegment, prev:RouteSegment, currTree:RouteTree) {
    this.currSegment = curr;
  }

  ngOnInit() {
    this.items.some(function (item) {
      item.isDefault && this.router.navigate(item.id, this.currSegment);
      return false;
    });
  }

  onSelect(item) {
    if (item.id) {
      this.router.navigate([item.id], this.currSegment);
      this.title.setTitle(item.name);
    }
  }
}
