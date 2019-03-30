import { Injectable } from "@angular/core";

import { AppSettings } from "./app-settings/app-settings";

@Injectable()
export class AppService {
  constructor(private appSettings: AppSettings) {}

  public getSettings() {
    return this.appSettings;
  }
}
