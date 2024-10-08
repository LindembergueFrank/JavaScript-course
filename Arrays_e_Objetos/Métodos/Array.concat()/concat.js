// Método que mescla dois arrays

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];

let mergedArray = array1.concat(array2);
let mergedArray2 = array2.concat(array1);

console.log("Array1: " + array1);
console.log("Array2: " + array2);

console.log("\n----------");

console.log("\nArray1 mesclado com array2: " + mergedArray);
console.log("Array2 mesclado com array1: " + mergedArray2);