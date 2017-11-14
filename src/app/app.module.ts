import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatProgressBarModule, MatButtonModule, 
MatSidenavModule, MatCardModule } from '@angular/material';
import {HttpModule} from '@angular/http';
import {AppShellModule} from '@angular/app-shell';
import { SideMenuComponent } from './share/side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { SingComponent } from './sing/sing.component';
import { FeelComponent } from './feel/feel.component';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { ChartsModule } from 'ng2-charts';
import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    if(String(error).indexOf('Your browser does not support Smart Bluetooth') !== -1){
      alert('Your browser does not support Smart Bluetooth');
    }
  }
}

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
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCardModule,
    ChartsModule,
    AppShellModule.runtime(),
    HttpModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
    WebBluetoothModule.forRoot({
      enableTracing: true
    })
  ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
