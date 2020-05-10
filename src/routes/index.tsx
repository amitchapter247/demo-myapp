import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Home from '../pages/index';
import { showLoader, hideLoader } from '../action';
import FullPageLoader from '../components/Loader/FullPageLoader';
import { IRootState } from '../interfaces';
import { IAppRoutesProps } from '../interfaces/appRoutes.interface';


const AppRoutesComponent: React.FC = (props: IAppRoutesProps) => {
  const { mainState } = props;
  return (
    <>
      {' '}
      {mainState && mainState.showLoader ? <FullPageLoader /> : null}
      <Switch>
        <Route exact path={'/'}  component={Home} />
        
   
      </Switch>
    </>
  );
};

const mapStateToProps: any = (state: IRootState) => ({
  mainState: state.mainReducer,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showLoader: () => {
      dispatch(showLoader());
    },
    hideLoader: () => {
      dispatch(hideLoader());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRoutesComponent);
