import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
    public listView = 'cards';
    public filter = false;

    constructor() { }

    ngOnInit() {
    }

    arrayGenerator(n: Number): any[] {
        return Array(n);
    }
}
