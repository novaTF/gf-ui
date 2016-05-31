import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {HomeComponent} from './home';
import {DemoComponent} from './demo/';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
@Routes([
  {
    path: '', component: HomeComponent
  },
  {
    path: '/demo', component: DemoComponent
  }
])
export class AppComponent implements OnInit {
  title:string = '';

  constructor(private router:Router) {
  }

  ngOnInit() {
    // this.router.navigate(['/demo']);
  }
}
