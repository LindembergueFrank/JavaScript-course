console.log("Regex qye só aceita maiúsculas");

const apenasMaisculas = /[A-Z]/;

console.log(apenasMaisculas.test("ABCDE"));
console.log(apenasMaisculas.test("abcde"));
console.log(apenasMaisculas.test("ADASbasasas"));

console.log("\nRegex que só aceita strings terminadas com 'ID'");

const terminaComId = /ID$/;

console.log(terminaComId.test("nomeID"));
console.log(terminaComId.test("nome"));
console.log(terminaComId.test("IDnome"));
console.log(terminaComId.test("1212ID"));