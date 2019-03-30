import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppSettings } from "./app-settings/app-settings";
import { AppSettingsModule } from "./app-settings/app-settings.module";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppSettingsModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appSettings: AppSettings, appService: AppService) {
    console.log("AppModule", appSettings);
    console.log("AppService in AppModule", appService.getSettings());
  }
}
