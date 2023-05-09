function modifyDiagonalElements() {
    var matrix = [];
    for (var i = 0; i < 5; i++) {
      matrix[i] = [];
      for (var j = 0; j < 5; j++) {
        var randomValue = Math.floor(Math.random() * 10) - 5;
        matrix[i][j] = randomValue;
      }
    }
  
    console.log("Початковий масив:");
    printMatrix(matrix);
  
    
    for (var k = 0; k < 5; k++) {
      if (matrix[k][k] > 0) {
        matrix[k][k] = 1;
      } else {
        matrix[k][k] = 0;
      }
    }
  
    console.log("Масив зі зміненими елементами по головній діагоналі:");
    printMatrix(matrix);
  }
  
  
  
  function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
    }
  }
  
  // Виклик функції
  modifyDiagonalElements();