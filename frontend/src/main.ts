import 'zone.js';
import { bootstrapApp } from '@angular/core';
import { AppModule } from './app/app.module';

const env = {
  production: false
};

bootstrapApp(AppModule, { ngZoneInitEnv: env})
  .catch(err => console.error(err));
