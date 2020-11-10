import React from 'react';

import Navigation from "./Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import LoginForm from "./components/user/LoginForm";
import Detailed from "./pages/Detailed";

/**
 * Main App component, routes are defined here
 */


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/login' component={LoginForm}/>
            <Route name="detailed" path='/book/:id' component={Detailed} />
            <Route path="/results/:searchText"  component={Results} />
        </Switch>
    </div>
  );
}

export default App;
