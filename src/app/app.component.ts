import {Component, OnInit} from '@angular/core';
import {Routes, Router, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
@Routes([
  {
    path: '/gf-ui', component: HomeComponent
  }
])
export class AppComponent implements OnInit {
  title:string = '';

  constructor(private router:Router) {
  }

  ngOnInit() {
    // this.router.navigate(['/demo'], this.curRouteSegment);
  }
}
