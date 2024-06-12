import {HttpClient} from "@angular/common/http";
import flagsmith from 'flagsmith';

export function initializeFeatureFlags(environmentID: string, httpClient: HttpClient): Promise<any> {
    return flagsmith.init({
        api: 'http://localhost:8000/api/v1/',
        environmentID,
        angularHttpClient: httpClient,
        realtime: true,
        onChange: (oldFlags, params) => { // Occurs whenever flags are changed
            // Determines if the update came from the server or local cached storage
            const {isFromServer} = params;

            console.group({isFromServer})
            console.log(flagsmith.getAllFlags())
            console.groupEnd()

            const brandColor = flagsmith.getValue("brand_color");

            const brand_colorOld = oldFlags?.["brand_color"] && oldFlags["brand_color"].value;

            if (brandColor !== brand_colorOld) {
                // Value has changed, do something here
                console.log('Color has changed: ' + brandColor)
            }
        }
    });
}