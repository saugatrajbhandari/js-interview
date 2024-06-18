/*
counter()  1
counter()  2
counter()  3
counter.reset() 
counter()  1
counter()  2
counter()  3
**/

const counter = (() => {
  let count = 0;

  const inner = () => {
    count++;
    console.log(count);
    return count;
  };

  inner.reset = () => (count = 0);

  return inner;
})();

counter();
counter();
counter();
counter.reset();
counter();
counter();
counter();
