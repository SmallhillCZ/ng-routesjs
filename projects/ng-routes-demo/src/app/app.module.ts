import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutesModule } from 'projects/ng-routes/src/public_api';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    RoutesModule.forRoot({ root: environment.api_endpoint })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
