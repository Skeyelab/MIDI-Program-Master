import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ChannelSetting} from "../models/channel-setting";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ioConfig: any;
  storedSettings: Array<ChannelSetting>;
  restoredSettings: Array<ChannelSetting>;
  @ViewChild('fileInput') fileInput: ElementRef;

  webMidiActive($event) {
    this.ioConfig = $event;
  }


  importJson() {
    this.fileInput.nativeElement.click();
  }

  fileChosen() {
    if(this.fileInput.nativeElement.files && this.fileInput.nativeElement.files.length > 0) {
      const file = this.fileInput.nativeElement.files[0];
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = event => {
        this.storedSettings = JSON.parse(event.target['result']);
      }
    }
  }
}
