// using iife

function Counter() {
  this.count = 0;

  this.increment = () => {
    this.count++;
  };

  this.decrement = () => {
    this.count--;
  };
}

let singleTon = (function () {
  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    },
  };
})();

const counterOne = singleTon.getInstance();
const counterTwo = singleTon.getInstance();

console.log(counterOne === counterTwo);

// using class

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    } else {
      return Singleton.instance;
    }
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);
