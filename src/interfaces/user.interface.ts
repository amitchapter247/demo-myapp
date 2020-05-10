import { RouteComponentProps } from 'react-router';

export interface IUserState {

}

export interface IUserProps {
  profileReducer?: IUserModel;
  getData: () => void;
  userReducer?: IUserModel;
}

export interface IUserModel {
  isLoading: boolean;
  userData: any;
  isError: boolean;
}
