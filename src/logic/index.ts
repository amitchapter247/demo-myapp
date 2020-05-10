import { Logic, createLogic } from 'redux-logic';
import { push } from 'react-router-redux';
import {UserLogics } from './User';

export const redirectToLogic = createLogic({
  type: 'REDIRET_TO',
  async process(data, dispatch: any, done) {
    const action: any = data.action;
    dispatch(
      push({ pathname: action.payload.path, state: action.payload.state }),
    );
    done();
  },
});

export const AllLogics: Logic[] = [
  ...UserLogics,
 
  redirectToLogic,
];
