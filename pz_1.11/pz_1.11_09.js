function analyzeNumber(number) {
    if (number > 0) {
      console.log(number + " є позитивним числом.");
    } else if (number < 0) {
      console.log(number + " є негативним числом.");
    } else {
      console.log("Введене число є нулем.");
    }
  
    
    var isPrime = true;
    if (number === 1) {
      isPrime = false;
    } else if (number > 1) {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      console.log(number + " є простим числом.");
    } else {
      console.log(number + " не є простим числом.");
    }
  
    var divisibleBy2 = number % 2 === 0;
    var divisibleBy5 = number % 5 === 0;
    var divisibleBy3 = number % 3 === 0;
    var divisibleBy6 = number % 6 === 0;
    var divisibleBy9 = number % 9 === 0;
  
    console.log("Ділення числа на 2 без залишку:", divisibleBy2);
    console.log("Ділення числа на 5 без залишку:", divisibleBy5);
    console.log("Ділення числа на 3 без залишку:", divisibleBy3);
    console.log("Ділення числа на 6 без залишку:", divisibleBy6);
    console.log("Ділення числа на 9 без залишку:", divisibleBy9);
  }
  
  // Введення числа користувачем
  var number = parseInt(prompt("Введіть число:"));
  
  // Виклик функції
  analyzeNumber(number);