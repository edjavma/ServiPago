import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  ENDPOINT: string;
  //ENDPOINT2: string;
}

export const APP_DI_CONFIG: AppConfig = {  
  ENDPOINT: 'http://localhost:8085' 
  //ENDPOINT: ''  
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }