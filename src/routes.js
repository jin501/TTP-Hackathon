import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import UserProfile from './components/UserProfile';
import CoursePage from './components/CoursePage';

export default (
  <Route path='/' component={App}>
    <Route path='profile' component={UserProfile} />
    <Route path='course/:course' component={CoursePage} />
  </Route>
);
