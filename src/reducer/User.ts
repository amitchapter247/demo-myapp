import {
  UserInitialState,

} from '../states';
import { handleActions } from 'redux-actions';
import { IUserModel,  } from '../interfaces';
import { UserActionTypes } from '../action';

export const userReducer = handleActions<IUserModel, any>(
  {
    [UserActionTypes.USER_DETAIL_REQUEST]: (
      state = UserInitialState,
      action,
    ): IUserModel => ({
      ...state,
      isLoading: true,
      userData: {},
    }),
    [UserActionTypes.USER_DETAIL_SUCCESS]: (
      state = UserInitialState,
      action,
    ): IUserModel => ({
      ...state,
      isLoading: false,
    
      userData: action.payload.userData,
    }),
    [UserActionTypes.USER_DETAIL_FAILURE]: (
      state = UserInitialState,
      action,
    ): IUserModel => ({
      ...state,
      isLoading: false,
      isError: action.payload.error,
      userData: {},
    }),
  },
  UserInitialState,
);

