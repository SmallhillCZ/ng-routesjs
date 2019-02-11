import { Component } from '@angular/core';
import { RoutesApiService, ApiError } from 'projects/ng-routes/src/public_api';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
  <p>Endpoint: {{api_endpoint}}</p>
  <p>Response:</p>
  <pre>{{response | json}}</pre>
  <p>Error:</p>
  <pre>{{error | json}}
  `,
  styles: []
})
export class AppComponent {

  api_endpoint = environment.api_endpoint;

  response: any;
  error: ApiError;

  constructor(private api: RoutesApiService) {
    this.testApi();
  }

  async testApi() {
    try{
      this.response = await this.api.get("test");
    }
    catch(err){
      this.error = err;
    }
  }
}
