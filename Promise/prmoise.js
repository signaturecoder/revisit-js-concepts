console.log("Practise Promise, Promise Chain ");
/**
 * Callback - Helps to achieve asynchronous operations in JavaScript
 *
 * Issues -
 *      Pyramid of Doom
 *      Inversion of Control
 *
 * Resolve - Promise : It is an object that represents the eventual completion or failure of an asynchronous
 *                      operation and its resulting value.
 *
 *                      It has 3 states -
 *                      Pending - Initial State
 *                      fulfilled - operation is completed succesfully
 *                      rejected - operation is failed
 *
 * Consume the Promise -
 * Create a Promise -
 * Handling the Error Gracefully
 *
 * Ecommerce Cart -
 *
 * createOrder
 * proceedToPayment -
 *
 * Passing a callback vs attaching a callback
 *
 * HomeWork -
 *  APIs - createOrder
 *         proceedToPayment
 *         showOrderSummary
 *         updateWallet
 *
 */

/**
 * const cart = ["Badminton", "Shuttle", "Shoes"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happens, I will definitely be called. ");
  });

// Create a promise

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const errMsg = new Error("Cart is not Valid");
      reject(errMsg);
    }

    const orderId = 1234;
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Your payment is Sucessful");
  });
}
 */

/**
 * HomeWork
 */

const shopping_cart = [
  {
    itemName: "Badminton",
    price: 2000,
  },
  {
    itemName: "Shuttle",
    price: 120,
  },
  {
    itemName: "Shoes",
    price: 2200,
  },
];

let wallet_balance = 4000;

createOrder(shopping_cart)
  .then(function (orderId) {
    console.log("Order ID", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orders) {
    return orderSummary(orders);
  })
  .then(function (amt) {
    return updateWallet(amt);
  }).catch(function(err){
    console.log(err.message);
  }).then(function(balance){
    console.log(`Your wallet balance is ${balance}`);
  });

// createOrder
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart()) {
      reject(new Error("Your Cart is not Valid"));
    }

    const orderId = {
        id: 1234,
        cartItems: cart
    };
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
}

// proceedToPayment
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve(orderId);
  });
}

function orderSummary(orders) {
  return new Promise(function (resolve, reject) {
    const orderedAmt = orders.cartItems.reduce((amt, cur) => amt + cur.price, 0);
    resolve(orderedAmt);
  });
}

function updateWallet(amount) {
    console.log("Amount ", amount);
  return new Promise(function (resolve, reject) {
    const remaining_balance = wallet_balance - amount;
    if (remaining_balance > 0) {
      resolve(remaining_balance);
    } else {
      reject(
        new Error(
          "You have not enough wallet balance, Please remove some items."
        )
      );
    }
  });
}

function validateCart(cart) {
    return true;
}
