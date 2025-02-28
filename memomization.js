// memomization is an optimization technique that can be use to reduce time-consuming calculation by saving previous input to something called cache and return the result for it

let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const memomize = (func) => {
  const cache = {};

  return (...args) => {
    const n = args[0];

    if (n in cache) {
      console.log("from cache");
      return cache[n];
    }

    let result = func(n);
    cache[n] = result;
    return result;
  };
};

const efficientMemomize = memomize(calc);
efficientMemomize(4);

