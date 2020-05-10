import { createAction } from 'redux-actions';

export enum UserActionTypes {

  USER_DETAIL_REQUEST = 'Request for user detail',
  USER_DETAIL_SUCCESS = 'Fetch user details successfully',
  USER_DETAIL_FAILURE = 'Failed to load user detail',



}



// Fetch Video details
export const userDetailRequest = createAction(
  UserActionTypes.USER_DETAIL_REQUEST,
);
export const userDetailSuccess = createAction(
  UserActionTypes.USER_DETAIL_SUCCESS,
);
export const userDetailFailed = createAction(
  UserActionTypes.USER_DETAIL_FAILURE,
);

