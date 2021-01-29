import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/Layouts/Homepage.js'
import LandingPage from './components/Layouts/Landing/LandingPage'
import Cluster from './components/Layouts/Cluster'
import ReportPage from './components/Layouts/ReportPage'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Test from './components/Auth/Test'
import Chonker from './components/Layouts/Chonker'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Homepage' component={Homepage} />
        <Route exact path='/Cluster' component={Cluster} />
        <Route exact path='/ReportPage' component={ReportPage} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/Signup' component={SignUp} />
        <Route exact path='/Chonker' component={Chonker} />
        <Route exact path='/test' component={Test} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
