import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
