function numbers(arr){
    let uniqueNumber = 0;
    for (let i = 0; i < arr.length; i++) {
      uniqueNumber ^= arr[i];
    }
    return uniqueNumber;
}
 
console.log(numbers([1,1,1,2,1,1,1]));

