import { PositionInterface } from './Position';

export interface PatrimonioInterface {
  checkingAccountAmount: number;
  positions?: PositionInterface[];
  consolidated: number;
}
