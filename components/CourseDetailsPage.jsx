

import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../courses';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Pre-requisites:</strong></p>
      <ul>
        {course.prerequisites.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ul>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map(topic => (
            <li key={topic.week}>
              <strong>Week {topic.week}:</strong> {topic.topic} - {topic.content}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetailsPage;
