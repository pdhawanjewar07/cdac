interface Maths_util {
  num: number;
  square(): number;
  cube(): number;
  sum(...nums: number[]): number;
}

function Maths_util(this: Maths_util, num: number): void {
  this.num = num;
}

Maths_util.prototype.square = function (this: Maths_util): number {
  return Math.pow(this.num, 2);
}

Maths_util.prototype.cube = function (this: Maths_util): number {
  return Math.pow(this.num, 3);
}

Maths_util.prototype.sum = function (this: Maths_util, ...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0); // acc = accumulator, val = current element, 0 = initial value
}

const mu1 = new (Maths_util as any)(12) as Maths_util;

console.log(mu1.square());
console.log(mu1.cube());
console.log(mu1.sum(10, 20, 30, 40));
