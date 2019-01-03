import {CcSetting} from "./cc-setting";

export interface ChannelSetting {
  channel: number;
  bankSelectorCourse: number;
  bankSelectorFine: number;
  programChange: number;
  ccs: Array<CcSetting>;
}
