/**
 * Write Polyfills of Map, Filter and Reduce
 */

// Map - Callback should return each element

Array.prototype.myMap = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }

    return arr;
}

const arr = [2,5,6];
const arrOfObjects = [{fruit: "apple", price: 200}, {fruit: "mango", price: 160}, {fruit: "guava", price: 60}];
const result = arr.myMap(ele => {
    return ele * 2
});
console.log(result);


/**
 * Filter Polyfils - Here callback should satisfy the condition and then return the filtered element
 */

Array.prototype.myFilter = function (callback) {
    let result = [];

    for(let i =0; i < this.length; i++) {
        if(callback(this[i], i, this))
            result.push(this[i]);
    }

    return result;
}

const result2 = arr.myFilter(ele => ele > 2)
console.log(result2);


/**
 * Reduce PolyFills - Need to Cover the edge cases
 */

Array.prototype.myReduce = function(callback, initialValue) {

    var accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
      accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i]; 
    }
    return accumulator;
}

const sumOfNum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sumOfNum);