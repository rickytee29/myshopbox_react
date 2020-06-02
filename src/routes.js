import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import PageOneContainer from './containers/HomeContainer';
import PageTwoContainer from './containers/DashboardContainer';

export default (
  <>
    <Route exact path="/" component={PageOneContainer} />
    <Route exact path="/st-lucia" component={PageOneContainer} />
    <Route exact path="/barbados" component={PageOneContainer} />
    <Route exact path="/grenada" component={PageOneContainer} />
    <Route exact path="/dominica" component={PageOneContainer} />
    <Route exact path="*/dashboard" component={PageTwoContainer} />
  </>
);
