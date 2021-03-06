import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Store } from 'redux';
import { Router } from 'react-router-dom';
import configureStore from './store';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FullPageLoader from './components/Loader/FullPageLoader';
const AppRoutesComponent = React.lazy(() => import('./routes'));

const history = createBrowserHistory();
const store: Store = configureStore(history);

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<FullPageLoader />}>
            <AppRoutesComponent />
          </Suspense>
        </Router>
        <ToastContainer
          autoClose={8000}
          hideProgressBar
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          transition={Slide}
        />
      </Provider>
    </>
  );
};

export default App;
