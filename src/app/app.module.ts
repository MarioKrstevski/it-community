import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        CoreRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
