function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
  }
  
  
  console.log(isDivisible(10, 2, 5));  
  console.log(isDivisible(7, 2, 5));   