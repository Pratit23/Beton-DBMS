import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './components/Layouts/Homepage.js'
import LandingPage from './components/Layouts/Landing/LandingPage'
import Cluster from './components/Layouts/Cluster'
import ReportPage from './components/Layouts/ReportPage'
import SignIn from './components/Auth/SignIn'
// import SignUp from './components/Auth/SignUp'
import SignUpRevised from './components/Auth/SignUpRevised'
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
import AdminLogin from './components/Auth/Admin/AdminLogin.js';
import LoginPage from './components/Auth/Contractors/LoginPage';
import SignupPage from './components/Auth/Contractors/SignupPage';
import AdminHomepage from './components/Layouts/Admin/AdminHomepage.js';
import Verified from './components/Layouts/Admin/Verified.js';
import All from './components/Layouts/Admin/All.js';
import AllUsers from './components/Layouts/Admin/AllUsers';
import Feedback from './components/Layouts/Admin/Feedback.js';
import ContractorHomepage from './components/Layouts/Contractors/ContractorHomepage'
import Tenders from './components/Layouts/Contractors/Contractor Components/Tenders'
import Profile from './components/Layouts/Profile'
import AddTender from './components/Layouts/Admin/AdminComponents/AddTender'
import SpecificReport from './components/Layouts/Admin/SpecificReport.js';
import AllAdvertisers from './components/Layouts/Admin/AllAdvertisers.js';
import AllContractors from './components/Layouts/Admin/AllContractors.js';
import TenderDetailed from './components/Layouts/Contractors/Contractor Components/TenderDetailed';

// setting up an apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1000/graphql',
  onError: ({ response, operation, graphQLErrors, networkError }) => {
    if (operation.operationName === "IgnoreErrorsQuery") {
      response.errors = null;
    }
    if (graphQLErrors && graphQLErrors[0] && graphQLErrors[0].message) {
      M.toast({ html: graphQLErrors[0].message })
    }
    if (networkError) {
      M.toast({ html: "There seems to be an internet issue!" })
    }
    if (response?.errors) {
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
            <Route exact path='/Profile' component={Profile} />

            {/* auth routes below */}
            <Route exact path='/Homepage' component={Homepage} />
            <Route exact path='/Cluster' component={Cluster} />
            <Route exact path='/ReportPage' component={ReportPage} />
            <Route exact path='/feedback/report' component={FeedbackReport} />
            <Route exact path='/coupons' component={Coupons} />

            {/* advertiser routes */}
            <Route exact path='/advertiser/signup' component={AdvSignupPage} />
            <Route exact path='/advertiser/login' component={AdvLoginPage} />
            <Route exact path='/advertiser/homepage' component={AdvertiserHomepage} />
            <Route exact path='/advertiser/advertisments' component={AllAdvertisments} />
            <Route exact path='/advertiser/add/advertisments' component={AddAdvertisment} />
            <Route exact path='/advertiser/add/coupons' component={AddCoupons} />
            <Route exact path='/advertiser/coupons' component={AllCoupons} />

            {/* admin routes */}
            <Route exact path='/admin/login' component={AdminLogin} />
            <Route exact path='/admin/homepage' component={AdminHomepage} />
            <Route exact path='/admin/verified/reports' component={Verified} />
            <Route exact path='/admin/all/reports' component={All} />
            <Route exact path='/admin/feedback/reports' component={Feedback} />
            <Route exact path='/admin/users' component={AllUsers} />
            <Route exact path='/admin/advertisers' component={AllAdvertisers} />
            <Route exact path='/admin/contractors' component={AllContractors} />
            <Route exact path='/admin/add/tender' component={AddTender} />
            <Route exact path='/admin/report/:id' component={SpecificReport} />

            {/* Contractor routes */}
            <Route exact path='/contractor/login' component={LoginPage} />
            <Route exact path='/contractor/signup' component={SignupPage} />
            <Route exact path='/contractor/homepage' component={ContractorHomepage} />
            <Route exact path='/contractor/tenders' component={Tenders} />
            <Route exact path='/contractor/tender/:id' component={TenderDetailed} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
