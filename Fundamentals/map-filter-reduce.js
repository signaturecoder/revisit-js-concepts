/**
 * Map accepts 3 parameters - current element, index and array
 */
const arr = [2, 45, 6];
const result = arr.map((ele, i, arr) => ele * 2 + i);
console.log(result); // 4, 91, 14

/**
 * Filter accepts 3 parameters - current element, index and array
 */

const filteredResult = arr.filter((val, i, arr) => val > 5);
console.log(filteredResult); // 45, 6

/**
 * Resuce - 4 parameters - accumulator (previous value), current element, index, array
 */

const sumOfNum = arr.reduce((acc, curr) => acc + curr);
console.log(sumOfNum);

// Chaining Questions
// Q1: Returns total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60;
let students = [
  { name: "Sanu", roll: 5, marks: 80 },
  { name: "Ravi", roll: 7, marks: 69 },
  { name: "Sunny", roll: 2, marks: 35 },
  { name: "Alka", roll: 10, marks: 55 },
];

const totalMarks = students
  .map((student) => (student.marks < 60 ? student.marks + 20 : student.marks))
  .filter((marks) => marks > 60)
  .reduce((acc, curr) => acc + curr, 0);
console.log(totalMarks);
