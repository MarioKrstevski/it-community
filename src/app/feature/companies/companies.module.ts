import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/filters/filters.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyModalComponent } from './components/company-modal/company-modal.component';
import { CompanyCompactComponent } from './components/company-compact/company-compact.component';
import { PerksComponent } from './components/perks/perks.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { DemoMaterialModule } from '../material/material-module';
import { ViewOptionsComponent } from './components/view-options/view-options.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FiltersComponent,
        CompaniesComponent,
        CompanyCardComponent,
        CompanyModalComponent,
        CompanyCompactComponent,
        PerksComponent,
        MapComponent,
        FooterComponent,
        ViewOptionsComponent,
    ],
    imports: [
        CompaniesRoutingModule,
        FormsModule,
        CommonModule,
        DemoMaterialModule
    ]
})
export class CompaniesModule { }
