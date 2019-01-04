import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChannelSetting} from "../../../models/channel-setting";

@Component({
  selector: 'app-settings-stored',
  templateUrl: './setting-stored.component.html',
  styleUrls: ['./setting-stored.component.scss'],
})
export class SettingStoredComponent implements OnChanges{
  @Input() settings: Array<ChannelSetting> = [];
  @Input() ioConfig: any;
  uri: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('settings')) {
      if(this.settings) {
        this.generateJsonUri();
      }
    }
  }

  restoreSettings() {
    this.ioConfig.outputs.forEach(output => {
      this.settings.forEach(setting => {
        if (setting.bankSelectCoarse) {
          output.sendControlChange(0, setting.bankSelectCoarse, setting.channel);
        }
        if (setting.bankSelectFine) {
          output.sendControlChange(32, setting.bankSelectFine, setting.bankSelectFine);
        }
        if (setting.programChange) {
          output.sendProgramChange(setting.programChange, setting.channel);
        }
        setting.ccs.forEach(cc => {
          output.sendControlChange(cc.number, cc.value, setting.channel);
        });
      });
    });
  }

  generateJsonUri() {
    this.uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.settings));
  }
}
