function MathsUtil(num1) {
  this.value = num1;
  this.cube = () => {
    console.log("cube=", this.value * this.value * this.value);
  };
}
function MathsProto() {
  this.square = (x) => {
    console.log("square is ", x * x);
  };
}

function MathsProto2() {
  this.power = (a, b) => {
    console.log(Math.pow(a, b));
  };
}
MathsProto.prototype = new MathsProto2();
let d = new MathsProto();
d.square(12);
d.power(2, 4);
//PROTOTYPE chaining -----
MathsProto.prototype = new MathsProto2();
let a1 = new MathsProto();
console.log("prototype of x=", Object.getPrototypeOf(a1));

a1.square(2);
MathsUtil.prototype = new MathsProto();
let x = new MathsUtil(3);
x.cube();
x.square(4);
x.power(2, 3);
//console.log("x=",x)
//console.log("prototype of x=",Object.getPrototypeOf(x))
