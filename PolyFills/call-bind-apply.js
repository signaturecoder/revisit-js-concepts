// Polyfills of Call, Bind, Apply
const student = {
  name: "Sanu Kumar",
};

function printDetails(age, address) {
  console.log(
    `My name is ${this.name}. I am ${age} years old lives in ${address}`
  );
}

// Polyfills of call
Function.prototype.myCall = function (context = {}, ...args ) {
    //edge case
    if(typeof this !== "function"){
        throw Error(this + "It is not callable");
    }

    context.fn = this;
    context.fn(...args);
};

printDetails.myCall(student, 25,"Manpur");

// Polyfills of apply
Function.prototype.myApply = function (context = {}, args = [] ) {
    //edge case
    if(typeof this !== "function"){
        throw Error(this + "It is not callable");
    }

    if(!Array.isArray(args)){
        throw TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
};

printDetails.myApply(student, [25,"Manpur"]);

// Polyfills of call
Function.prototype.myBind = function (context = {}, ...args ) {
    //edge case
    if(typeof this !== "function"){
        throw Error(this + "cannot be bound as it's not callable");
    }

    context.fn = this;
    return function (...newArgs) {
       return context.fn(...args, ...newArgs);
    }

};
const func = printDetails.myBind(student, 25);
func("Manpur");