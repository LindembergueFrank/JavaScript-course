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

console.log("\nRegex utilizando '|'");

const validaMarca = /Marca: (Nike|Adidas|Asisd|Lacoste|Puma)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Adidass"));
console.log(validaMarca.test("Marca: Kappa"));
console.log(validaMarca.test("asascasdNIkasE"));

console.log("\nRegex que valida um IP, exemplo: 127.0.0.1");

const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("127.0.0.1.1"));
 console.log(validaIp.test("1246.0.0.1"));
 console.log(validaIp.test("127001"));

 console.log("\nRegex que valida um usuario no sistema");

 const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

 console.log(validaUsuario.test("user123"));
 console.log(validaUsuario.test("teasae@example.com"));
 console.log(validaUsuario.test("us_-"));
 console.log(validaUsuario.test("1111111111111111111111111"));