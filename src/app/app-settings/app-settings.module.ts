import { HttpClient, HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { delay, tap } from "rxjs/operators";

import { AppSettings } from "./app-settings";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppSettings,
    {
      multi: true,
      provide: APP_INITIALIZER,
      deps: [HttpClient, AppSettings],
      useFactory: (http: HttpClient, appSettings: AppSettings) => {
        return () => {
          return http
            .get("app-settings.json")
            .pipe(
              delay(3000), // simulate 3 seconds delay on loading app-settings.json
              tap((data: AppSettings) => {
                Object.assign(appSettings, data);
              })
            )
            .toPromise();
        };
      }
    }
  ]
})
export class AppSettingsModule {}
