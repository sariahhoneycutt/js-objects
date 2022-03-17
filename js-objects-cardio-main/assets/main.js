// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const course1 ={
  name: `Web Design`,
  bio: `Man, I really hate that course name. But, here we are. In this class, you'll learn a lot about the design and development of webpages and websites. Hold on for a fun year of building, hacking, and learning!`,
  students: [`Frankie`, `Ryan`, `Richard`, `Maggie`, `Neiman`, `Freshie`, `SP`],
  period: 3,
  teacher: `Rob Dominguez`
}
console.log(course1)
// 2. Write a statement that will log some information about your course to the console using dot-notation.
course1.name
console.log(course1.name)
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const course2 ={
  name: `Chemistry`,
  bio: `Welcome to Honors Chemistry!

We are going to have a great year. Please email me if you have any questions.
Mrs. Lusa`,
  students: [`Richard`, `Walker`, `SP`, `Lauren`, `Maggie`, `Riley`],
  period: 2,
  teacher: `Devon Lusa`
}
console.log(course2)
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function someInfo(course) {
  console.log(`${course.name} is a class.`);
  return course;
}

someInfo(course2);
someInfo(course1);
// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.

// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
