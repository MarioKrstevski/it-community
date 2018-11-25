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
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AgmOverlays } from "agm-overlays";
import { AgmCoreModule } from '@agm/core';
import { MyMarkerComponent } from './components/my-marker/my-marker.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

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
        GoogleMapComponent,
        MyMarkerComponent,
    ],
    imports: [
        CompaniesRoutingModule,
        CommonModule,
        DemoMaterialModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC-UOu23S6rRvG4vbsbT9ps0U5tHsSgccA'
        }),
        AgmOverlays,
        AgmJsMarkerClustererModule,
    ]
})
export class CompaniesModule { }
