import { ImainState } from './store.interface';
import { RouteProps } from 'react-router';

export interface IAppRoutesProps extends RouteProps {
  mainState?: ImainState;
  userReducer?: any
}

export interface IAppRoutes {
  HOME: string;
 
}
