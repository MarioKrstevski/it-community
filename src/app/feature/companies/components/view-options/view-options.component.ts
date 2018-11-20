import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-view-options',
    templateUrl: './view-options.component.html',
    styleUrls: ['./view-options.component.scss']
})
export class ViewOptionsComponent implements OnInit {

    @Output() public presentationMode = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }
    setPMode(value: string) {
        this.presentationMode.emit(value);
        console.log(value);
    }

}
