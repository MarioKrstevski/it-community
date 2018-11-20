import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    public intention;
    public any = false;
    public fe = false;
    public be = false;
    public testing = false;
    public mobile = false;
    public fs = false;
    public do = false;

    constructor() { }

    ngOnInit() {

    }
    applyFilter() {
        console.log('Filter Applied');
    }


}
