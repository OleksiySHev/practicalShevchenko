function add(a, b) {
    var result = a + b;
    console.log("Результат додавання:", result);
}
  
function sub(a, b) {
    var result = a - b;
    console.log("Результат віднімання:", result);
}
  
function mul(a, b) {
    var result = a * b;
    console.log("Результат множення:", result);
}
  
function div(a, b) {
    if (b !== 0) {
      var result = a / b;
      console.log("Результат ділення:", result);
    } else {
      console.log("Помилка: Ділення на нуль неможливе.");
    }
}

  var a = parseInt(prompt("Введіть перше число:"));
  var b = parseInt(prompt("Введіть друге число:"));  
  var operation = prompt("Введіть операцію (+ для додавання, - для віднімання, * для множення, / для ділення):");
  
  if (operation == "+") {
    alert(add(a, b));
  } else if (operation == "-") {
    alert(sub(a, b));
  } else if (operation == "*") {
    alert(mul(a, b));
  } else if (operation == "/") {
    alert(div(a, b));
  } else {
    console.log("Помилка: Невірна операція.");
  }