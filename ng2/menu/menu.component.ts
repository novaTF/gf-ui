import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {DropmenuComponent} from  '../dropmenu/dropmenu.component';

@Component({
    selector: 'gf-menu',
    moduleId: module.id,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input()
    title:Object;

    @Input()
    items:Array<Object>;

    /**
     * 激活状态
     */
    @Input()
    active:boolean;

    /**
     * 是否水平显示
     */
    @Input()
    horizon:boolean;

    @Input()
    selected:string;

    @Output()
    onSelect:EventEmitter<Event> = new EventEmitter();

    constructor(private dropmenu:DropmenuComponent) {
        dropmenu.addMenu(this);
    }

    select(item:Object) {
        this.selected = item.value;
        //选择后关闭面板
        this.active = false;
        //触发事件
        let event:any = new Event('onSelect');
        event.value = this.selected;
        event.field = this.title.value;
        this.onSelect.emit(event);
    }
}
