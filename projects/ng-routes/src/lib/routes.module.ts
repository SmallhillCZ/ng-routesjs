import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutesApiServiceConfig, RoutesApiService } from "./routes-api.service";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [ RoutesApiService ]
})
export class RoutesModule {

  constructor (@Optional() @SkipSelf() parentModule: RoutesModule) {
    if (parentModule) {
      throw new Error('RoutesModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(config: RoutesApiServiceConfig): ModuleWithProviders {
    return {
      ngModule: RoutesModule,
      providers: [
        {provide: RoutesApiServiceConfig, useValue: config }
      ]
    };
  }

}
