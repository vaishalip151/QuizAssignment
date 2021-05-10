import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import ThankYouPage from '../Component/ThankYouPage';
import PageNotFound from '../Component/PageNotFound';

const Quiz = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/thankyou" component={ThankYouPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Quiz;
