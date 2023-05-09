function reverseAndSquareArray(array) {
    var reversedArray = array.reverse();
  
    for (var i = 0; i < reversedArray.length; i++) {
      if (typeof reversedArray[i] === 'number') {
        reversedArray[i] = Math.pow(reversedArray[i], 2);
      }
    }
  
    return reversedArray;
  }
  
  
  var inputArray = [1, 2, 3, 4, 'a', 'b', 'c', 5];
  var resultArray = reverseAndSquareArray(inputArray);
  
  console.log("Вхідний масив:", inputArray);
  console.log("Результат:", resultArray);