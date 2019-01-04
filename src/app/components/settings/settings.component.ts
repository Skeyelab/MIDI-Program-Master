import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChannelSetting} from "../../../models/channel-setting";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnChanges {
  settings: Array<ChannelSetting>;
  amountOfChannel = 16;
  @Input() io: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('io')) {
      this.generateChannels();
    }
  }

  generateChannels() {
    this.settings = [];
    Array.from(Array(this.amountOfChannel).keys()).map(index => {
      this.settings.push({
        channel: index + 1
      });
    });
    this.enableListeners();
  }

  enableListeners() {
    if(this.io) {
      this.io.inputs.forEach(input => {

      });
    }
  }
}
