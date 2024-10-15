let reg1 = new RegExp('teste');

console.log(reg1.test('teste'));
console.log(reg1.test('testando'));

console.log("\n--------\n");
let reg2 = /testando/;

console.log(reg2.test('teste'));
console.log(reg2.test('test'));
console.log(reg2.test('testando'));

console.log("\n--------\n");

const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test('www.google.com'));
console.log(validaDominio.test('www.codando.'));
console.log(validaDominio.test('google.com'));

console.log("\n--------\n");

const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test('teste@email.com'));
console.log(validaEmail.test('@email@email'));
console.log(validaEmail.test('@email'));

console.log("\n--------\n");

const validaDataNascimento = /[0-31]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataNascimento.test('01/12/2000'));
console.log(validaDataNascimento.test('2/12/2000'));
console.log(validaDataNascimento.test('01/13/2000'));