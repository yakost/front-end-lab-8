let getClosestToZero = (...nums) => nums.reduce((a, b) => Math.abs(b) < Math.abs(a) ? b : a, Infinity)

console.log(getClosestToZero(9, 5, -4, -9));
