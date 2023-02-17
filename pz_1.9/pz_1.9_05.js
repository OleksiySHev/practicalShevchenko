let numb = 10000;
let i = 0;
while(numb > 50){
   i++;
   numb /= 2;
}
let result = numb % 2**8;
console.log("Результат: " + result);
console.log("К-сть ділень: " + i);
