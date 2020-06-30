import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';

import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import CalendlyPage from './pages/CalendlyPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/demo" component={CalendlyPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
