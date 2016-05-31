import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';
import {FontComponent} from './+font';
import {ColorComponent} from './+color';
import { BaselistComponent } from './+baselist';

@Component({
  moduleId: module.id,
  selector: 'app-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '', component: BaselistComponent},
  {path: '/font', component: FontComponent},
  {path: '/color', component: ColorComponent}
])
export class BaseComponent{

}
