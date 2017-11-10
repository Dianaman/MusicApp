import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatProgressBarModule,
MatSidenavModule } from '@angular/material';
import {HttpModule} from '@angular/http';
import {AppShellModule} from '@angular/app-shell';
import { SideMenuComponent } from './share/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    AppShellModule.runtime(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
