import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/Layouts/Homepage.js'
import LandingPage from './components/Layouts/LandingPage'
import PublicMap from './components/Layouts/PublicMap'
import Cluster from './components/Layouts/Cluster'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Homepage' component={Homepage} />
        <Route exact path='/PublicMap' component={PublicMap} />
        <Route exact path='/Cluster' component={Cluster} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
