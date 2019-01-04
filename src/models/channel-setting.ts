import {CcSetting} from "./cc-setting";

export interface ChannelSetting {
  channel: number;
  bankSelectCoarse?: number;
  bankSelectFine?: number;
  programChange?: number;
  ccs?: Array<CcSetting>;
}
