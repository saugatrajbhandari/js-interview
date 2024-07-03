const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1 reslove");
  }, 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p2 reslove");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 reslove", 1000);
    reject("p3 reject");
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
