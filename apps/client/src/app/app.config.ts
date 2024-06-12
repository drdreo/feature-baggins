import {APP_INITIALIZER, ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import { initializeFlagsmithFlags, initializeUnleashFlags } from './flags/initialize';


export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        // FLAGSMITH
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: () => (httpClient: HttpClient) => initializeFlagsmithFlags("5zTgST86Fv25rsKLPqyrLb", httpClient),
        //     multi: true,
        //     deps: [HttpClient]
        // }
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => initializeUnleashFlags("default:development.unleash-insecure-frontend-api-token"),
            multi: true,
        }
    ],
};
