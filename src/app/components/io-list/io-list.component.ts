import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as WebMidi from 'webmidi';
import {ChannelSetting} from "../../../models/channel-setting";

@Component({
  selector: 'app-io-list',
  templateUrl: './io-list.component.html',
  styleUrls: ['./io-list.component.scss']
})
export class IoListComponent implements OnInit {
  inputs = [];
  outputs = [];
  error: string;
  enabled: boolean;
  @Output() webMidiActive: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.enable();
  }

  enable() {
    WebMidi.enable(err => {
      err ? this.showError(err) : this.success();
    },)
  }

  success() {
    this.enabled = true;
    this.inputs = WebMidi.inputs;
    this.outputs = WebMidi.outputs;
    this.webMidiActive.emit({
      inputs: this.inputs,
      outputs: this.outputs,
    });
  }

  showError(err) {
    this.enabled = false;
    this.error = err;
  }

}
