import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('io')) {
      this.generateChannels();
    }
  }

  generateChannels() {
    this.settings = [];
    Array.from(Array(this.amountOfChannel).keys()).map(index => {
      this.settings.push({
        channel: index + 1,
        ccs: []
      });
    });
    this.enableInputListeners();
  }

  enableInputListeners() {
    if (this.io) {
      this.io.inputs.forEach(input => {
        input.addListener('controlchange', 'all', function (e) {
          switch (e.controller.name) {
            case 'bankselectcoarse':
              console.log(`Updating MSB for ch: ${e.channel} to ${e.value}`);
              this.settings.find(setting => setting.channel === e.channel).bankSelectCoarse = e.value;
              break;
            case 'bankselectfine':
              console.log(`Updating LSB for ch: ${e.channel} to ${e.value}`);
              this.settings.find(setting => setting.channel === e.channel).bankSelectFine = e.value;
              break;
            default:
              console.log('Received controlchange message.', e);
              const setting = this.settings.find(setting => setting.channel === e.channel);
              const cc = setting.ccs.find(cc => cc.number === e.controller.number);
              if (cc) {
                cc.value = e.value
              } else {
                setting.ccs.push({
                  number: e.controller.number,
                  value: e.value
                })
              }
          }
        }.bind(this));

        input.addListener('programchange', 'all', function (e) {
          console.log(`Updating PC for ch: ${e.channel} to ${e.value}`);
          this.settings.filter(setting => setting.channel === e.channel).forEach(setting => {
            setting.programChange = e.value;
            setting.ccs = [];
          });
        }.bind(this));
      });
    }
  }
}
