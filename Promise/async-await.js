/**
 * Async 
 * Await
 * How async await works behind the scenes? 
 * 
 * async function always return a Promise 
 *      In case of return doesn't have a promise, it will automatically wrap the value inside a promise.
 * 
 * Await = await is keyword which can only be used inside an async function and in front of a promise
 * 
 * Difference between Promise vs async-await?
 *      When you use async await, JS Engine will wait for the promise to be resolved and then proceed to next line.
 *      While in Promise, it doesn't wait for promise to be resolved and immediately moves to next line.
 * 
 * Note: Function execution is suspended, because there is nothing in callstack 
 */

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve("Promise Resolved Value");
    }, 20000)
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve("Promise Resolved Value");
    }, 40000)
});


// async-await of handeling promises
async function handlePromise(){
    // JS Engine was appeared waiting for promise to resolved
    console.log("Hello World!!");
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
} 

function callAdd(a, b) {
   return setTimeout(function add(){
    console.log(a, b);
        return a + b;
    }, 5000);
}

handlePromise();

console.log(callAdd(6,5));

// output
// Hello World!!
// async-await.js:53 7
// async-await.js:36 Namaste JavaScript
// async-await.js:37 Promise Resolved Value
// async-await.js:46 4 5
// async-await.js:40 Namaste JavaScript 2
// async-await.js:41 Promise Resolved Value


// Promise Way of Handeling

// function handlePromise(){
//     p.then(function(data){
//         console.log(data);
//     });
//     console.log("Printed immediately");
// }


/**
 * Actual Implementation
 */
const API_URL = 'https://api.github.com/users/signaturecoder';

async function handleActualPromise() {
    const response = await fetch(API_URL);
    const data = await response.json(); // response is a readableStread which need to be converted to json which is again a Promise basically
    console.log(data);
}
handleActualPromise();