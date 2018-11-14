import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
    declarations: [AboutComponent, MainMenuComponent],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
