const cart = ["shoes", "pant", "kurtha"];

const promise = createOrder(cart);
promise
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proccedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!cart) {
      reject(new Error("error in create order"));
    }

    const orderId = "213";
    setTimeout(() => {
      resolve(orderId);
    }, 3000);
  });
}

function proccedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("payment successful", orderId);
  });
}
