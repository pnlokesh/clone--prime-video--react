import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer, Navbar } from './components';
import HomePage from './pages/HomePage';
import MovieInfoPage from './pages/MovieInfoPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movie/:id" exact>
            <MovieInfoPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
