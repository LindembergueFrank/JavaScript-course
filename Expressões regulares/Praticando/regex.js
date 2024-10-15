console.log("Regex qye só aceita maiúsculas");

const apenasMaisculas = /[A-Z]/;

console.log(apenasMaisculas.test("ABCDE"));
console.log(apenasMaisculas.test("abcde"));
console.log(apenasMaisculas.test("ADASbasasas"));