let a = [1,2,3,4,7];
let b = [1,2,3,4,6];
// let result = a.concat(b);
let result = [...a, ...b];
result.sort();
console.log(result);