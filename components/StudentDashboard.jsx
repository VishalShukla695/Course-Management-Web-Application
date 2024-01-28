

import React from 'react';
import { useSelector } from 'react-redux'; // Assuming Redux is used for state management

const StudentDashboard = () => {
  // Assuming 'enrolledCourses' is stored in Redux state
  const enrolledCourses = useSelector(state => state.enrolledCourses);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <div>
        <h2>Enrolled Courses</h2>
        {enrolledCourses.length === 0 ? (
          <p>No courses enrolled yet.</p>
        ) : (
          enrolledCourses.map(course => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              {/* Add thumbnail, due date, progress bar, etc. */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
