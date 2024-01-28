

import React, { useState } from 'react';
import courses from '../courses';

const CourseListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Filter courses based on search term
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div>
      <h1>Course Listing Page</h1>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* List of courses */}
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            {/* Clickable course name to navigate to details page */}
            <a href={`/course/${course.id}`}>{course.name}</a> - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListingPage;
