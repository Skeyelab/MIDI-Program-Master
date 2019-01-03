import { Component, OnInit } from '@angular/core';
import {ChannelSetting} from "../../../models/channel-setting";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Array<ChannelSetting>;

  constructor() { }

  ngOnInit() {
  }

}
