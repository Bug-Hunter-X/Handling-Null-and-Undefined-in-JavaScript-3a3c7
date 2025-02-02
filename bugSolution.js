function foo(x) {
  if (x === null || x === undefined) {
    return -1; // Handle null or undefined case
  } else if (isNaN(x)){
    return -2; //Handle NaN case
  }else {
    return x * 2; //Normal case
  }
}

console.log(foo(null)); // Output: -1
console.log(foo(undefined)); // Output: -1
console.log(foo(5)); // Output: 10
console.log(foo(NaN)); // Output: -2