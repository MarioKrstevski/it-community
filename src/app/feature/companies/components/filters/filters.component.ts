import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    public more = false;
    public evenMore = false;

    public cities = [
        { value: 'Kumanovo', viewValue: "Kumanovo" },
        { value: 'Skopje', viewValue: "Skopje" },
        { value: 'Bitola', viewValue: "Bitola" },
        { value: 'Tetovo', viewValue: "Tetovo" },
        { value: 'Ohrid', viewValue: "Ohrid" }
    ];

    public disabled = false;
    public max = 10;
    public min = 0;
    public value = 6;
    public step = 2;
    public tickInterval = 1;
    public vertical = false;
    public showTicks = true;
    public thumbLabel = true;
    public autoTicks = false;
    public invert = false;


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
