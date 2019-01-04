import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import {ChannelSetting} from "../../../models/channel-setting";

@Component({
  selector: 'app-settings-live',
  templateUrl: './settings-live.component.html',
  styleUrls: ['./settings-live.component.scss']
})
export class SettingsLiveComponent implements OnChanges {
  @Input() settings: Array<ChannelSetting> = [];
  amountOfChannels = 16;
  @Input() ioConfig: any;
  @Output() settingsStored: EventEmitter<Array<ChannelSetting>> = new EventEmitter<Array<ChannelSetting>>();

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('ioConfig')) {
      this.generateChannels();
    }
  }

  generateChannels() {
    this.settings = [];
    Array.from(Array(this.amountOfChannels).keys()).forEach(index => {
      this.settings.push({
        channel: index + 1,
        ccs: [],
        active: false,
      });
    });
    this.enableInputListeners();
  }

  enableInputListeners() {
    if (this.ioConfig) {
      this.ioConfig.inputs.forEach(input => {
        input.addListener('controlchange', 'all', function (e) {
          const setting = this.settings.find(setting => setting.channel === e.channel);
          setting.active = true;
          switch (e.controller.name) {
            case 'bankselectcoarse':
              if (setting) {
                setting.bankSelectCoarse = e.value;
              }
              break;
            case 'bankselectfine':
              if (setting) {
                setting.bankSelectFine = e.value;
              }
              break;
            default:
              const cc = setting.ccs.find(cc => cc.number === e.controller.number);
              if (cc) {
                cc.value = e.value
              } else {
                setting.ccs.push({
                  number: e.controller.number,
                  value: e.value
                });
              }
          }
          this.cd.detectChanges();
          //Force change detection inside event listener otherwise changes are not reflected in the view
        }.bind(this));

        input.addListener('programchange', 'all', function (e) {
          const setting = this.settings.find(setting => setting.channel === e.channel);
          if (setting) {
            setting.programChange = e.value;
            setting.ccs = [];
            setting.active = true;
          }
          this.cd.detectChanges();
          //Force change detection inside event listener otherwise changes are not reflected in the view
        }.bind(this));
      });
    }
  }


  storeSettings() {
    this.settingsStored.emit(JSON.parse(JSON.stringify(this.settings)));
  }
}
