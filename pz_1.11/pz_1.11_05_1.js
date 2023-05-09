function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(isDivisible(10, 2, 5));  
  console.log(isDivisible(7, 2, 5));   



