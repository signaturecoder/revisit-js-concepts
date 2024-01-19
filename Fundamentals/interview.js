/**
 *  arrays of fruits
 *  apple, mango, guava
 * 
 * a 
 */

let fruits = ["apple", "mango", "guava", "banana"];

let listContainer = document.querySelector(".list-container");




console.log("Container", listContainer);
console.log("item", listEle);

let arr = fruits.map(item => {
    let listEle = document.createElement("li");
    listEle.textContent = item;
});


