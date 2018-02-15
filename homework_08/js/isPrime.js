function isPrime(nums) {
    for(var i = 2; i < nums; i++) {
        if(nums % i === 0) {
            return false;
        }
    }
    return nums > 1;
}

console.log(isPrime(5));
