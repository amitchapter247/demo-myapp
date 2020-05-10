import {
  IUserModel

} from './user.interface';

export interface ImainState {
  showLoader: boolean;
}

export interface IRootState {
  mainReducer: ImainState;
  userReducer: IUserModel;

}
