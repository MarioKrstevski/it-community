import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesModule } from '../feature/companies/companies.module';
import { AboutComponent } from '../shared/components/about/about.component';
import { MainMenuComponent } from '../shared/components/main-menu/main-menu.component';

@NgModule({
    declarations: [
        AboutComponent,
        MainMenuComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CompaniesModule,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
    }
}
