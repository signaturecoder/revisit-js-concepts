/**
 *  What is Closures ?
 *  - It is a combination of a function bundled together with its references to its surrounding state ( lexical environment ).
 *
 *  - Simple Terms - A function can get the access to their parent scope from inner fn.
 *
 * */

// function sayHello() {
//     const name = "Sanu Kumar";

//     function greeting() {
//         console.log("Hello " + name + "!");
//     }

//     greeting();
// }

// sayHello();

/**
 * Ex 2: If we return the function from another fn
 *
 * Even when the inner function get returned from the outer fn, at line 34: somefn has the reference to its inner fn
 *  and remembers its lexical environment where local variables name is created.
 * Thus, it passed the name variable to greeting when it is called again.
 *
 */

function sayHello() {
  let name = "Sanu Kumar";

  function greeting() {
    console.log("Hello " + name + "!");
  }

  name = "Sunny kumar";
  return greeting;
}
// here, when line 41 got executed, sayHello() is not in callstack now so later at some point,
// if you call someFn, it remembers the references to its lexical environment along with the fn definiton ( because closures is returned)
const someFn = sayHello();
someFn(); // Sunny Kumar
someFn(); // Sunny Kumar

function sum(x) {
  return function (y) {
    return x + y;
  };
}

// const result = sum(4)(5);
//console.log(result);

// const result = sum(5)
// console.log(result(4));

/**
 *  Write a fn which accepts a fn and maximum no of times it is called, and once the limit is reached, it return the previous results only.
 *
 */

const add = (a, b) => a + b;

function myFunction(fn, limit) {
  let counter = 0;
  let result;
  return function (...args) {
    counter++;
    if (counter > limit) {
      return result;
    } else {
      result = fn.apply(this, args);
      return result;
    }
  };
}

const someFunc = myFunction(add, 3);

console.log(someFunc(4, 5)); // 9
console.log(someFunc(5, 6)); // 11
console.log(someFunc(6, 7)); // 13

console.log(someFunc(7, 8)); // 13


// private variables and methods exposure 

const counter = (function printDetails() {
    let salary = 3000;

    function changeBy(val) {
        salary += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        value() { return salary}
    }
})()

counter.increment();
counter.increment();
console.log(counter.value());