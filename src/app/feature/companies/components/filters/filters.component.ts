import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Output() public presentationMode = new EventEmitter();

    constructor() { }

    ngOnInit() {

    }
    setPMode(value: string) {
        this.presentationMode.emit(value);
        console.log(value);
    }

}
