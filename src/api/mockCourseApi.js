import delay from './delay';

const courses = [
  {
    id: "testcourse1",
    title: "Course 1",
    authorId: "Test Author1",    
    category: "Category 1"
  },
  {
    id: "testcourse2",
    title: "Course 2",    
    authorId: "Test Author2",    
    category: "Category 2"
  },
  {
    id: "testcourse3",
    title: "Course 3",    
    authorId: "Test Author3",
    category: "Category 3"
  },
  {
    id: "testcourse4",
    title: "Course 4",    
    authorId: "Test Author2",
    category: "Category 1"
  },
  {
    id: "testcourse5",
    title: "Course 5",    
    authorId: "Test Author1",
    category: "Category 5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {          
          course.id = generateId(course);          
          courses.push(course);
        }

        resolve(Object.assign({}, course));
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
