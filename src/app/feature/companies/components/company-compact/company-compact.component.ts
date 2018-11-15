import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-company-compact',
    templateUrl: './company-compact.component.html',
    styleUrls: ['./company-compact.component.scss']
})
export class CompanyCompactComponent implements OnInit {

    panelOpenState = false;

    constructor() { }

    ngOnInit() {
    }

}
