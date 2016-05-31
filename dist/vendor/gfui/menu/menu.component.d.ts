import { EventEmitter } from 'angular2/core';
import { DropmenuComponent } from '../dropmenu/dropmenu.component';
export declare class MenuComponent {
    private dropmenu;
    title: Object;
    items: Array<Object>;
    active: boolean;
    horizon: boolean;
    isToggleMod: boolean;
    selected: any;
    onSelect: EventEmitter<Event>;
    constructor(dropmenu: DropmenuComponent);
    select(item: Object): void;
}
