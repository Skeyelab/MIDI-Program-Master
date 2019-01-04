import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChannelSetting} from "../../../models/channel-setting";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-settings-stored',
  templateUrl: './setting-stored.component.html',
  styleUrls: ['./setting-stored.component.scss'],
})
export class SettingStoredComponent {
  @Input() settings: Array<ChannelSetting> = [];
  @Input() ioConfig: any;
  @Output() settingsRestored: EventEmitter<Array<ChannelSetting>> = new EventEmitter<Array<ChannelSetting>>();

  constructor() {
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
      this.settingsRestored.emit(this.settings);
    });
  }

  downloadJson() {
    const blob = new Blob([JSON.stringify(this.settings)], {type: 'application/json;charset=utf-8'});
    FileSaver.saveAs(blob, 'settings.json');
  }

  reset() {
    this.settings = [];
  }
}
