let reg1 = new RegExp('teste');

console.log(reg1.test('teste'));
console.log(reg1.test('testando'));

console.log("\n--------\n");
let reg2 = /testando/;

console.log(reg2.test('teste'));
console.log(reg2.test('test'));
console.log(reg2.test('testando'));