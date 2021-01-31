import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/Layouts/Homepage.js'
import LandingPage from './components/Layouts/Landing/LandingPage'
import Cluster from './components/Layouts/Cluster'
import ReportPage from './components/Layouts/ReportPage'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Chonker from './components/Layouts/Chonker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import M from 'materialize-css'
import Facts from './components/Layouts/Landing/Interactive/Facts';


// setting up an apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1000/graphql',
  // onError:({ response, operation,graphQLErrors,networkError }) => {
  //   if (operation.operationName === "IgnoreErrorsQuery") {
  //     response.errors = null;
  //   }
  //   if( graphQLErrors && graphQLErrors[0] && graphQLErrors[0].message){
  //     M.toast({ html: graphQLErrors[0].message })
  //   }
  //   if(networkError){
  //     M.toast({ html: "There seems to be an internet issue!"})
  //   }
  //   if(response?.errors){
  //     response.errors = null;
  //   }

  // }
})

const App = (props) => {

  return (
    <ApolloProvider client={client}>
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
          <Route exact path='/test' component={ Facts } />
        </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
