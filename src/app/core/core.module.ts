import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesModule } from '../feature/companies/companies.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        CompaniesModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
    }
}
