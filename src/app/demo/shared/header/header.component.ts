import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  set title(title:string) {
    this.titleService.setTitle(title);
  }

  get title():string {
    return this.titleService.getTitle();
  }

  constructor(private titleService:Title) {
  }

  ngOnInit() {
  }

  back() {
    window.history.back();
  }

}
