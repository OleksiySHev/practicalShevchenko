function twicearr(arr){
    const flattened = arr.reduce((acc, val) => acc.concat(val), []);
    const sorted = flattened.sort((a, b) => a - b);
    return sorted;
}

console.log(twicearr([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));