import {Component, OnInit} from '@angular/core';
import {Routes, Router, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {DemoComponent} from '../demo';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
@Routes([
  {path: '/demo', component: DemoComponent}
])
export class HomeComponent implements OnInit {


  constructor(private router:Router, private currSegment:RouteSegment) {
  }

  ngOnInit() {
    this.router.navigate(['./demo'], this.currSegment);
  }

}
