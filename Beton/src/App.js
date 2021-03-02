import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/Layouts/Homepage.js'
import LandingPage from './components/Layouts/Landing/LandingPage'
import Cluster from './components/Layouts/Cluster'
import ReportPage from './components/Layouts/ReportPage'
import SignIn from './components/Auth/SignIn'
// import SignUp from './components/Auth/SignUp'
import SignUpRevised from './components/Auth/SignUpRevised'
import Chonker from './components/Layouts/Chonker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import M from 'materialize-css'
import FeedbackReport from './components/Layouts/FeedbackReport.js';
import Coupons from './components/Layouts/Coupons.js';
import AdvSignupPage from './components/Auth/AdvSignupPage.js';
import AdvLoginPage from './components/Auth/AdvLoginPage.js';
import AdvertiserHomepage from './components/Layouts/AdvertiserHomepage.js';
import AllAdvertisments from './components/Layouts/Advertiser/AllAdvertisments.js';
import AddCoupons from './components/Layouts/Advertiser/AddCoupons.js';
import AllCoupons from './components/Layouts/Advertiser/AllCoupons.js';
import AddAdvertisment from './components/Layouts/Advertiser/AddAdvertisment.js';

// setting up an apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1000/graphql',
  onError:({ response, operation,graphQLErrors,networkError }) => {
    if (operation.operationName === "IgnoreErrorsQuery") {
      response.errors = null;
    }
    if( graphQLErrors && graphQLErrors[0] && graphQLErrors[0].message){
      M.toast({ html: graphQLErrors[0].message })
    }
    if(networkError){
      M.toast({ html: "There seems to be an internet issue!"})
    }
    if(response?.errors){
      response.errors = null;
    }

  }
})

const App = (props) => {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App" >
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/Signup' component={SignUpRevised} />

          {/* auth routes below */}
          <Route exact path='/Homepage' component={Homepage} />
          <Route exact path='/Cluster' component={Cluster} />
          <Route exact path='/ReportPage' component={ReportPage} />
          <Route exact path='/feedback/report' component={FeedbackReport} />
          <Route exact path='/coupons' component={Coupons} />
          <Route exact path='/advertiser/signup' component={AdvSignupPage} />
          <Route exact path='/advertiser/login' component={AdvLoginPage} />
          <Route exact path='/advertiser/homepage' component={AdvertiserHomepage} />
          <Route exact path='/advertiser/advertisments' component={AllAdvertisments} />
          <Route exact path='/advertiser/add/advertisments' component={AddAdvertisment} />
          <Route exact path='/advertiser/add/coupons' component={AddCoupons} />
          <Route exact path='/advertiser/coupons' component={AllCoupons} />
        </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
