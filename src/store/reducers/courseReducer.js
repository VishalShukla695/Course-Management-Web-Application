

const initialState = {
    courses: [],
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES_SUCCESS':
        return {
          ...state,
          courses: action.payload, // Update courses array with fetched data
        };
      case 'ENROLL_COURSE':
        const updatedCourses = state.courses.map(course => {
          if (course.id === action.payload.courseId) {
            return {
              ...course,
              enrolled: true, // Update enrolled status for the enrolled course
            };
          }
          return course;
        });
        return {
          ...state,
          courses: updatedCourses,
        };
      // Add more cases to handle other actions as needed
      default:
        return state;
    }
  };
  
  export default courseReducer;
  