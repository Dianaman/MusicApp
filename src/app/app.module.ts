import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatProgressBarModule,
MatSidenavModule } from '@angular/material';
import {HttpModule} from '@angular/http';
import {AppShellModule} from '@angular/app-shell';
import { SideMenuComponent } from './share/side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { SingComponent } from './sing/sing.component';
import { FeelComponent } from './feel/feel.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    SingComponent,
    FeelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    AppShellModule.runtime(),
    HttpModule,
    RouterModule.forRoot(
      APP_ROUTES
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
