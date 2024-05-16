import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LayoutService } from './core/service/app.layout.service';
import { RippleModule } from 'primeng/ripple';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { interceptorProviders } from './core/interceptor/interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    LayoutService,
    importProvidersFrom(HttpClientModule),
    BrowserModule,
    BrowserAnimationsModule,
    provideAnimations(),
    provideRouter(routes),
    RippleModule,
    interceptorProviders
  ]
};
