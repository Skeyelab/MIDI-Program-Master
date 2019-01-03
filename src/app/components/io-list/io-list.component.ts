import {Component, OnInit} from '@angular/core';
import * as WebMidi from 'webmidi';

@Component({
  selector: 'app-io-list',
  templateUrl: './io-list.component.html',
  styleUrls: ['./io-list.component.scss']
})
export class IoListComponent implements OnInit {
  inputs = [];
  outputs = [];

  constructor() {
  }

  ngOnInit() {
    this.enable();
  }

  enable() {
    WebMidi.enable(err => {
      err ? this.showError(err) : this.setInOut();
    },)
  }

  setInOut() {
    this.inputs = WebMidi.inputs;
    this.outputs = WebMidi.outputs;
  }

  showError(err) {
    alert(err);
  }

}
