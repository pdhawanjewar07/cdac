function Maths_util(num) {
    this.num = num;
}
Maths_util.prototype.square = function () {
    return Math.pow(this.num, 2);
};
Maths_util.prototype.cube = function () {
    return Math.pow(this.num, 3);
};
Maths_util.prototype.sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, val) { return acc + val; }, 0); // acc = accumulator, val = current element, 0 = initial value
};
var mu1 = new Maths_util(12);
console.log(mu1.square());
console.log(mu1.cube());
console.log(mu1.sum(10, 20, 30, 40));
