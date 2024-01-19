/**
 * 1. Promise.all - It will wait for all the promises to be resolved ( in all success case)
 *                  IF p2 get rejected, after 1 sec , As Soon as any of the promise failed, it will return error and not wait for other promises to continue 
 * 
 *  Promise.all([p1, p2, p3]) => [val1, val2, val3]
 *               |   |    |
 *              3s  1s   2s
 * 
 * 2. Promise.allSettled - In this case, if p2 get rejected, it will wait for all promises to be complete and after 3s, 
 *                         we will get the final results in array form
 * 
 *  Promise.allSettled([p1, p2, p3]) => [val1, val2, val3]
 *               |   |    |
 *              3s  1s   2s
 * 
 * 
 * 3. Promise.race - It will return the value whichever settles first ( either resolve or reject)
 * 
 *  Promise.race([p1, p2, p3]) => val2 or error if p2 fails
 *                |   |    |
 *               3s  1s   2s
 * 
 * 4. Promise.any - It will wait for the first success when promise resolved.
 *                   If all the promises fails, it will give you aggregated errors 
 * 
 *  Promise.any([p1, p2, p3]) => val2 if only p2 resolved.
 *                |   |    |
 *               3s  1s   2s
 *             ---- resolve, success, fulfilled
 *  Settled - |
 *             ---- reject, failure, rejected
 */

const p1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("P1 Resolved"), 3000);
    // setTimeout(() => reject("P1 Failed"), 3000);
});

const p2 = new Promise(function(resolve, reject){
    // setTimeout(() => resolve("P2 Resolved"), 1000);
    setTimeout(() => reject("P2 Failed"), 1000);
});

const p3 = new Promise(function(resolve, reject){
    setTimeout(() => resolve("P3 Resolved"), 2000);
    // setTimeout(() => reject("P3 Failed"), 2000);
});

// Promise.all([p1, p2, p3]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.allSettled([p1, p2, p3]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.race([p1, p2, p3]).then(res => console.log(res)).catch(err => console.error(err));

Promise.any([p1, p2, p3]).then(res => console.log(res)).catch(err => console.error(err.errors));

// IF all promise got rejected, then you will get another object in err i.e err.errors



