function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(arraySum([5, 5, 1, 3])); 