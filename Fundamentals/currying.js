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
  console.log(noOfArgmofOriginalFn);
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
const curriedAdd = curry(add);
console.log(typeof curriedAdd(3));
curriedAdd(3)(4); // 7
console.log(curriedAdd(3));
console.log(curriedAdd(4));

// const alreadyAddedThree = curriedAdd(3);
// alreadyAddedThree(4); // 7
