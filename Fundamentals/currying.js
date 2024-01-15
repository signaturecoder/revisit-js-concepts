/**
 * What is Currying? 
 *  - Currying is a technique of converting a function that takes multiple arguments into a sequence of functions that 
 *    each takes a single argument.
 * 
 */

// EX 2: Closures Exammples

function sum(valA) {
    return function(valB) {
        if(valB === undefined) {
            return valA;
        } else {
            return sum(valA + valB);
        }
    }
}

console.log(sum(1)(2)()); // 1



function add(a, b) {
    return a + b;
}


// function curry(fn) {
//     const noOfArgmofOriginalFn = arguments[0].length;
//     console.log(noOfArgmofOriginalFn);
//     let counter = 0;
//     return function(...args) {
//     counter++;

//         console.log("Inner fn", args);
//         console.log("Counter ", counter);
//         if(counter > noOfArgmofOriginalFn) {
//             const n = fn.apply(this, args);
//             return n;
//         } else {
//             return fn.call(this, args);
//         }
       
//     }

// }

// curry(add);
const curriedAdd = curry(add);
console.log(typeof curriedAdd(3)(4));
// curriedAdd(3)(4); // 7
// console.log(curriedAdd(3));
// console.log(curriedAdd(4));

// const alreadyAddedThree = curriedAdd(3);
// alreadyAddedThree(4); // 7