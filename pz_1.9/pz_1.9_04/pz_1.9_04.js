let name1 = prompt("Enter counts stage")
for(let i = 1; i<=name1;i++){
  console.log("*".repeat(i))
}

console.log("----------------------------")

for (let i = 1; i <= name1; i++) {
console.log(" ".repeat(name1-i) +"*".repeat(i * 2 - 1))
}

console.log("----------------------------")

    
    