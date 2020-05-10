import { createLogic } from 'redux-logic';
import {
  UserActionTypes,
  showLoader,
  hideLoader,
  userDetailSuccess,
  userDetailFailed,

} from '../action';
import { ApiRoutes,  } from '../config';
import { ApiHelper } from '../helper/ApiHelper';
/**
 *
 */

const userLogics = createLogic({
  type: UserActionTypes.USER_DETAIL_REQUEST,
  async process(data, dispatch: any, done) {

    dispatch(showLoader());
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.USER_DATA.service,
      ApiRoutes.USER_DATA.url,
      ApiRoutes.USER_DATA.method,
      ApiRoutes.USER_DATA.authenticate,
      undefined,
      undefined,
    );
    dispatch(hideLoader());
    if (response && !response.isError) {
      const { data,  } = response.data;
      dispatch(
        userDetailSuccess({
          userData: data,
        }),
      );
      done();
    } else {
      dispatch(hideLoader());
     
      dispatch(
        userDetailFailed({
          error: response.messages[0],
        }),
      );
      done();
    }
  },
});


export const UserLogics = [
  userLogics
];
