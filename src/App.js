import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { Footer, Navbar } from './components';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieInfoPage = lazy(() => import('./pages/MovieInfoPage'));

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <div className="app__body">
          <Suspense fallback={<CircularProgress className="cicular-loading" />}>
            <Switch>
              <Route path="/" exact component={HomePage} />

              <Route path="/movie/:id" exact component={MovieInfoPage} />
            </Switch>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
