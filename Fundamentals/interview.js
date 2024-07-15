// /**
//  *  arrays of fruits
//  *  apple, mango, guava
//  * 
//  * a 
//  */

// let fruits = ["apple", "mango", "guava", "banana"];

// let listContainer = document.querySelector(".list-container");




// console.log("Container", listContainer);
// console.log("item", listEle);

// let arr = fruits.map(item => {
//     let listEle = document.createElement("li");
//     listEle.textContent = item;
// });



// Array.prototype.myConcat = function (...items) {
//     // let result  = [];
//     // for(let i = 0; i < items.length; i++) {
//     //     // console.log("typeof ", typeof items[i]);
//     //     if(typeof items[i] === 'object') {
//     //         items[i].forEach(element => {
//     //             result.push(element);
//     //         });
//     //     } else {
//     //         result.push(items[i]);
//     //     }
//     // }
//     // return [...this, ...result];

//     let result = [...this];
//     for(let i = 0; i < items.length; i++) {
//         if(Array.isArray(items[i])) {
//             result.push(...items[i]);
//         } else {
//             result.push(items[i]);
//         }
//     }
//     return result;
// };

// console.log([1, 2, 3].myConcat([4, , 6])); // [1, 2, 3, 4, 5, 6]

function flatten(value) {
    var flattend_array = [];
   for(let i = 0; i < value.length; i++) {
    if(Array.isArray(value[i])) {
        flattend_array = flattend_array.concat(flatten(value[i]));
    } else {
        flattend_array.push(value[i]);
    }
   }
   return flattend_array;
}

console.log("Flat" ,flatten([3,4, [6, [4,5]]]));



