import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const PostsPage = lazy(() => import('./pages/posts-page/posts-page.component'));
const UsersPage = lazy(() => import('./pages/users-page/users-page.component'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LoadingOverlay active spinner />} >
              <Route exact path="/home" component={HomePage} />
              <Route path="/posts" component={PostsPage} />
              <Route path="/users" component={UsersPage} />
              <Route exact path="/" render={() => (
                  <Redirect to="/home" />
                )}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
