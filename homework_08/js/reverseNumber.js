function reverseNumber(nums) {
    return Math.abs(nums).toString().split("").reverse().join("") * Math.sign(nums);
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));
