import { combineReducers, AnyAction, Reducer } from 'redux';
import { handleActions } from 'redux-actions';
import { IRootState } from '../interfaces';
import {
  userReducer,

} from './User';

export const mainReducer = handleActions(
  {
    SHOW_LOADER: () => ({
      showLoader: true,
    }),
    HIDE_LOADER: () => ({
      showLoader: false,
    }),
  },
  {
    showLoader: false,
  },
);

export const RootReducer: Reducer<IRootState, AnyAction> = combineReducers<
  IRootState
>({
  mainReducer: mainReducer as any,
  userReducer: userReducer as any,
});
