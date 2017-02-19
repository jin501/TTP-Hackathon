import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import UserProfile from './components/UserProfile';
import CourseMenu from './components/course/CourseMenu';
import Discussion from './components/course/Discussion';
import Review from './components/course/Review';
// import courseRoutes from './courseRoutes'

export default (
  <Route path='/' component={App}>
    <Route path='profile' component={UserProfile} />
    <Route path='course/:course' component={CourseMenu} >
      <Route path='/discussion' component={Discussion} />
      <Route path='/review' component={Review} />
    </Route>
  </Route>
);
