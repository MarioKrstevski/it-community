import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/filters/filters.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
    declarations: [FiltersComponent, CompaniesComponent],
    imports: [
        CompaniesRoutingModule,
        CommonModule
    ]
})
export class CompaniesModule { }
