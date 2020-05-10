import { IApiRoutes } from '../interfaces';

export const ApiRoutes: IApiRoutes = {
  // Login
  USER_DATA: {
    service: "/v1/user",
    url: "/viewUserDetails",
    method: 'GET',
    authenticate: false,
  },
 
};
