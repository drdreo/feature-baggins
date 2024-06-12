import {APP_INITIALIZER, ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {initializeFeatureFlags} from "./flags/initialize-flags";


export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        {
            provide: APP_INITIALIZER,
            useFactory: () => (httpClient: HttpClient) => initializeFeatureFlags("5zTgST86Fv25rsKLPqyrLb", httpClient),
            multi: true,
            deps: [HttpClient]
        }
    ],
};
