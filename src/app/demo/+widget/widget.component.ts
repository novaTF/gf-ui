import { Component, OnInit } from '@angular/core';
import { WidgetlistComponent } from './+widgetlist';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '', component: WidgetlistComponent}
])
export class WidgetComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
