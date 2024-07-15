/**
 * It should return a promise 
 * It should return a array of values if all promise resolved successfully otherwise return error 
 */

function myPromise(promiseArr) {
    // to store results
    const result = [];

    // to keep track of resolved promises
    let completed = 0;

    return new Promise((resolve, reject) => {

        promiseArr.forEach((value, index) => {
            // we have to use Promise.resolve to convert any non-promise input to promise and later chain it with .then()

            // if array is empty
            if(promiseArr.length === 0) return resolve(result);

            Promise.resolve(value).then(res => {
                result[index] = res;

                completed++;

                // if "completed" is equal to the no. of promises to be resolved, it means all the promise resolved 
                // successfully and we should return the results
                if(completed === promiseArr.length){
                     resolve(result);
                }
            }).catch(err => reject(err));
        });
    });
}

/**
 * myPromise.allSettled
 * [{"status": "fulfilled", value: 4}, {"status": "rejected", "reason": 42}]
 */

function promiseAllSettled(iterable) {
    let wrappedPromises = iterable.map(value => 
        Promise.resolve(value).then(res => ({ status: "fulfilled", value: res }),
          reason => ({ status: "rejected", reason: reason }))
      );
    
      // now wrapped promises will contain all the settled promises 
      // we can send it to Promise.all() which will resolve everytimne.
      return Promise.all(wrappedPromises);
}