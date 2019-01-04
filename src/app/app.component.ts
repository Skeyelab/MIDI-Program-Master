import {Component} from '@angular/core';
import {ChannelSetting} from "../models/channel-setting";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  io: any;
  storedSettings: Array<ChannelSetting>;

  webMidiActive($event) {
    this.io = $event;
  }
}
