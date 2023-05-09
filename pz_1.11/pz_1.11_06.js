function performArrayOperations(N) {
    
    var array = [];
    for (var i = 0; i < N; i++) {
      var randomValue = Math.floor(Math.random() * 100); 
      array.push(randomValue);
    }
  
    
    console.log("Масив:", array);
  
    // Знаходження найбільшого значення
    var max = Math.max(...array);
    console.log("Найбільше значення:", max);
  
    // Знаходження найменшого значення
    var min = Math.min(...array);
    console.log("Найменше значення:", min);
  
    // Обчислення загальної суми елементів
    var sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Загальна сума елементів:", sum);
  
    // Обчислення середнього арифметичного
    var average = sum / array.length;
    console.log("Середнє арифметичне:", average);
  
    // Виведення непарних значень
    var oddValues = array.filter(value => value % 2 !== 0);
    console.log("Непарні значення:", oddValues);
  }
  
  // Приклад виклику функції з розмірністю масиву N = 10
  performArrayOperations(10);