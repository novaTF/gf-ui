import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { UilistComponent } from './+uilist';
import { BottonComponent } from './+botton';
import { ListCmpComponent } from './+list-cmp';
import { DialogComponent } from './+dialog';
import { MenuComponent } from './+menu';

@Component({
  moduleId: module.id,
  selector: 'app-ui',
  templateUrl: 'ui.component.html',
  styleUrls: ['ui.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '', component: UilistComponent},
  {path: '/botton', component: BottonComponent},
  {path: '/listCmp', component: ListCmpComponent},
  {path: '/dialog', component: DialogComponent},
  {path: '/menu', component: MenuComponent}
])
export class UiComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
