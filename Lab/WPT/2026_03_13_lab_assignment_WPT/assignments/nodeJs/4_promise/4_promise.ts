export {};

function divide(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Division by zero"));
    } else {
      resolve(Number((a/b).toFixed(5)));
    }
  });
}

divide(4, 3)
  .then(res => console.log(res))
  .catch(err => console.error(err));

divide(4, 0)
  .then(res => console.log(res))
  .catch(err => console.error(err));





