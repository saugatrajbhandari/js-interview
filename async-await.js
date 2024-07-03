const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 10000);
});

async function demo() {
  const r2 = await p2;
  console.log(r2);

  const r1 = await p1;
  console.log(r1);
}

demo();

aysnc;
