

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CourseListingPage} />
          <Route path="/course/:id" component={CourseDetailsPage} />
          <Route path="/dashboard" component={StudentDashboard} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
