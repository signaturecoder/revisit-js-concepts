/**
 * What is Currying?
 *  - Currying is a technique of converting a function that takes multiple arguments into a sequence of functions that
 *    each takes a single argument.
 *
 */

// EX 2: Closures Exammples

// function sum(valA) {
//     return function(valB) {
//         if(valB === undefined) {
//             return valA;
//         } else {
//             return sum(valA + valB);
//         }
//     }
// }

// console.log(sum(1)(2)()); // 1

function add(a, b) {
  return a + b;
}
/**
 * 1. When all the arguments passed which take to complete the function then we simply call it
 * 2. If not we will ask for more arguments to pass to the function
 */

function curry(fn) {
  const noOfArgmofOriginalFn = fn.length;
  // console.log(noOfArgmofOriginalFn);
  return function curried(...args) {
    if (args.length >= noOfArgmofOriginalFn) {
      return fn.apply(this, args);
    }
    return (arg) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}

// curry(add);
// const curriedAdd = curry(add);
// console.log(typeof curriedAdd(3));
// curriedAdd(3)(4); // 7
// console.log(curriedAdd(3));
// console.log(curriedAdd(4));

// const alreadyAddedThree = curriedAdd(3);
// alreadyAddedThree(4); // 7


/**
 * Implement the `curry` function which accepts a function as only argument
 * and return a function that accepts `any no of arguments` and 
 * returns a function which can be repeatedly called until at least the minimum no of arguments has been provided
 * The initial fn argument is then invoked with the provided arguments. 
 */

function addTwo(a, b) {
  return a + b;
}

function currySpecial(fn) {
  const noOfFnParamenters = fn.length;
  return function curried(...args) {
    // comaparision should not be greater than the noofparameters
    if (args.length >= noOfFnParamenters) {
      return fn.apply(this, args);
    }

    // here arg === undefined case is redundant.
    return (...arg) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, ...arg]);
  };
}

const curriedAddTwo = currySpecial(addTwo);
console.log(curriedAddTwo(3)(4)); // 7
console.log(curriedAddTwo(3, 4)); // 7
const alreadyAddedThree = curriedAddTwo(3);
console.log(alreadyAddedThree(4)); // 7


function multiplyThree(a, b, c) {
  return a * b * c;
}
const curriedMultiplyThree = currySpecial(multiplyThree);
console.log(curriedMultiplyThree(4)(5)(6)); // 120
console.log(curriedMultiplyThree(4)(5, 6)); // 120
console.log(curriedMultiplyThree(4, 5)(6)); // 120
console.log(curriedMultiplyThree(4, 5, 6)); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120