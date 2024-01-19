import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// https://reqres.in/api/users?page=1
// Display first_name and last_name as list items.
// sort the list with first_name
// call the api - no. of times the pages have
// Promise.allSettled([p1, p2]).( data)
function App() {
  const [noofPage, setNoofpage] = useState(1)
  const [userData1, setUserData1] = useState([])
  const [userData2, setUserData2] = useState([])
  const [allUserData, setAllUserData] = useState([])

  const urls = [
    'https://reqres.in/api/users?page=1',
    'https://reqres.in/api/users?page=2',
  ]

  async function fetchData() {
    const [res1, res2] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json())),
    )
    setUserData1(res1.data)
    setUserData2(res2.data)
  }

  useEffect(() => {
    fetchData()
    
  }, [])
  console.log('userdarta 1 ', userData1)

  return (
    <div>
      <ul>
        {
          [...userData1, ...userData2].map((item) => (
            <li key={item.id}>
              {item.first_name} {item.last_name}
            </li>
          ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/**
 *  Write a fn which accepts a fn and maximum no of times it is called, and once the limit is reached, it return the previous results only.
 *
 */

//     function someFunc(fn, noOfTimes) {
//         let a = 0;
//         let result;
//         if(typeof fn !== "function"){
//             throw Error("It is not a function");
//         }
       
//         return function(...args){
//             // console.log("a", a + 12);
//             a++;
//             if(a <= noOfTimes) {
//                 result = fn.apply(this, args);
//                 return result;
//             } else {
//                 return result;
//             }
//         }
//     }
// // someFuct accepts some arguments (funct) and no. of times function could be called


const someFuct = (fn) => {
  const noOfArg =  fn.length; // 3

   
}





// const myFunction = someFunc(multiply); // no of argu


// console.log(myFunction(4)(5)(6)); // 9


/**
 * Ex 3: Dig deep into closures
 */

/**
 * Program to reverse a string using JS without inbuilt function
I/P : HELLO 
O/P : OLLEH
 */

function revereString(s) {
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res = res + s[i];
  }
  console.log(res);
}
const str = "HELLO";
revereString(str);

/**
 * Check if 2 strings are anagram of each other or not.
I/P : String A = "MARY", String B = "ARMY"
O/P : true
 */

function checkAnagrams(str1, str2) {
  console.log("inside");
  if (str1.length !== str2.length) return false;

  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagrams("MARY", "ARMYC"));

/**
 * javascript
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5, 6, 5]));  // Output: [2, 3, 5]
console.log(findDuplicates([4, 4, 4, 4]));             // Output: [4]
console.log(findDuplicates([1, 2, 3, 4, 5]));          // Output: []
 */

function findDuplicates(arr) {
  // unique ele
  const uniqueEle = new Set(arr);
  const filteredEle = arr.filter(item => {
    if (uniqueEle.has(item)) {
      uniqueEle.delete(item);
    } else {
      return item;
    }
  });

  return [...new Set(filteredEle)]

}

const array1 = [1, 2, 3, 2, 4, 3, 5, 6, 5];
const array2 = [1, 2, 3, 4, 5]
console.log("Dublicates ", findDuplicates(array2));

// mount, update, unmount
//   contructor, rendering , componnentDidmount, componentWillunmount

//   useEffect(() => ,[count])

/**
 * Implement Debounce 
 * 
 * it is delaying 
 * 
 * call, bind, apply
 */

function debounce(func, delay = 300) {

    let timer;
    return (...args) => {
        clearInterval(timer);
       timer = setTimeout(() => func.apply(this, args), delay);
    }
}

debounce(() => saveData());


/** 



Q1
let c=0;

let id = setInterval(() => {
	console.log(c++) // 0
},200)

setTimeout(() => {
	clearInterval(id)
},2000)


0
0






Q2

let a = true;
let c = 0;

setTimeout(() => {
	a = false;
},2000)

while(a){
	console.log('Hello')
}



Output :->

Hello
Hello





Q3

⇒ console.log(console.log )

o/p=> print ref
console.log(console.log());

o/p=>window {}



Var myVAtr = Fn add() {
}

myVAr()


Q4

function getNumber(){
	return (2,4,5); //
}

var numb = getNumber();
console.log(numb); 


Function greeting() {

Let name = “Sanu”’, age =27

Return {

printName:() {
console.log(name);
},

printAge:() {

log(age)}

}
})()

Greeting.printName() // 






Statement:  Autocomplete Low-Level Design
Tech Stack: Vanilla Js, HTML & CSS


Must have:
# On typing inside the search box, it should suggest
Options

# Users should be able to select one of the options

Good to have:
# Search should be performant enough
# It should avoid unnecessary network call
# It should be re-usable and customizable
# It should persist previously fetch data




// some promise based result 
arrayofObje fruits

autoComplete 

*/