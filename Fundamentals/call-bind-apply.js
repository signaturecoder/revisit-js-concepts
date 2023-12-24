/**
 * write the definition of call, bind and apply method
 */

const student = {
  name: "Sanu Kumar",
};

function printDetails(age, address) {
  console.log(
    `My name is ${this.name}. I am ${age} years old lives in ${address}`
  );
}

// calling call method on some functions
printDetails.call(student, 27, "Bengaluru");
printDetails.call(student, 26, "Kanpur");

// calling apply method on some functions - difference is it accepts its arguments in array form
printDetails.apply(student, [27, "Bengaluru"]);

// calling bind method on some functions which returns a reusable funtions which is called later
const printDetailsLater = printDetails.bind(student);

printDetailsLater(27, "Bengaluru");
printDetailsLater(30, "Tamil Nadu");

/**
 * Use Case of Applying all the above methods
 */

// Q1. Output Based

//const age = 10;

const anotherStudent = {
  name: "Sunny",
  age: 30,
  getAge: function () {
    return `${this.age}`;
  },
};

const student3 = { age: 35 };

console.log(anotherStudent.getAge.call(student3)); // 35

//Q2. Output based - referring to this keyword

var age = 100;
function sayHello() {
  const age = 50;

  const anotherStudent = {
    name: "Sunny",
    age: 30,
    getAge() {
      return `${this.age}`;
    },
  };
  console.log(anotherStudent.getAge()); // 30
  console.log(anotherStudent.getAge.call(this)); // 100,  here it is pointing towards where fn is called which is global scope
  // console.log("Scope of this ", this); // global scope
}

sayHello();

const studentDetails = [
  {
    name: "Sanu Kumar",
    age: 27,
    address: "Bengaluru",
  },
  {
    name: "Sunny Kumar",
    age: 29,
    address: "Bengaluru",
  },
  {
    name: "Alka Kumari",
    age: 28,
    address: "Kharagpur",
  },
];

function printStudentDetails(i) {
  function printDetails() {
    console.log(
      "#" +
        i +
        " " +
        this.name +
        " is a " +
        this.age +
        " years student lived in " +
        this.address
    );
  }
  printDetails();
}

for (let i = 0; i < studentDetails.length; i++) {
  printStudentDetails.call(studentDetails[i], i);
}

// Q3: Concat two arrays using call or bind or apply method
const arr1 = [3, 5, 6];
const arr2 = [11, 12, 13];

arr1.push.apply(arr1, arr2);
console.log(arr1);

//Q4: find min/max of an array using apply
console.log(Math.max.apply(null, arr2)); // here no context is provided
console.log(Math.min.apply(null, arr2));

//Q4: Based on bind method
// Notes - Once a function is binded, it doesn't change its context and there is no bind chaining

function g() {
  console.log(this); // point to global object
}

let user = {
  f: g.bind(null),
};

// user.f(); --- point to global object

function f() {
  console.log(this.name);
}

g = f.bind({ name: "ravi" }).bind({ name: "ram" }); // it will print the first bound object

g(); // ravi

// Q6: This keyword and bind method in callback

function checkPassword(success, failure) {
    let password = prompt("Password? ", "");
    if (password === "matched") success(); // here loginSuccessful will  find the this in global object so you need to provide the current context
    else failure();
}
  
let user2 = {
    name: "Sunny Narayan",
    loginSuccessful() {
        console.log(this.name + " is logged in");
    },
    loginFailure() {
        console.log(this.name + " login failed");
    }
};
  
// checkPassword(user2.loginSuccessful.bind(user2), user2.loginFailure.bind(user2)); // that's why binding happened with the context
  

// Q7: Explicit binding with Arrow function
// Note: Arrow functions context doesn't affected by call, bind and apply and it simply points to global object
const thirdStudent = {
    name: "Sunny",
    age: 30,
    getAgeArrow: () => console.log(this.age),
    getAge: function () {
      return `${this.age}`;
    },
};

const fourthStudent = {age: 45};

thirdStudent.getAgeArrow.call(fourthStudent); // undefined global object
console.log(thirdStudent.getAge.call(fourthStudent)); // 45