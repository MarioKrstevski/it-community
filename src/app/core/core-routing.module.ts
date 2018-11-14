import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: 'companies', loadChildren: '../feature/companies/companies.module.ts#CompaniesModule' },
    // { path:'about', component:AboutComponent},
    { path: '**', redirectTo: 'companies' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
