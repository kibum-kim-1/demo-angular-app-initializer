import { Component } from "@angular/core";

import { AppSettings } from "./app-settings/app-settings";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  template: "AppComponent",
})
export class AppComponent {
  // intialized after 3 seconds
  constructor(appSettings: AppSettings, appService: AppService) {
    console.log("AppComponent", appSettings);
    console.log("AppService in AppComponent", appService.getSettings());
  }
}
