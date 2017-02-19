import React from 'react';
import { Route } from 'react-router';
import Discussion from './components/course/Discussion';
import Review from './components/course/Review';
import CoursePage from './components/CoursePage';

const courseRoutes = (
<Route path='course/:course' component={CoursePage} >
  <Route path='/discussion' component={Discussion} />
  <Route path='/review' component={Review} />
</Route>
)
