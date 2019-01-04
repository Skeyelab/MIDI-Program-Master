import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IoListComponent} from "./components/io-list/io-list.component";
import {NavComponent} from "./components/nav/nav.component";
import {SettingStoredComponent} from './components/settings-stored/setting-stored.component';
import { SettingsLiveComponent } from './components/settings-live/settings-live.component';

@NgModule({
  declarations: [
    AppComponent,
    IoListComponent,
    NavComponent,
    SettingStoredComponent,
    SettingsLiveComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
