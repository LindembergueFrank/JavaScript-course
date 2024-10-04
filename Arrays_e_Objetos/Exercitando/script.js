let pessoa = {
    nome: "Matheus Cocao",
    sexo: 'M',
    idade: 27,
    cpf: "109821314-50",
};

let detalhes = {
    cor: "Pardo",
    estadoCivil: "Solteiro",
};

console.log("Objeto 'pessoa': ");
console.log(pessoa);
console.log("Objeto 'detalhes': \n");
console.log(detalhes);

console.log("--------------------------------\n");

console.log("Atualizando 'pessoa' com os dados de 'detalhes utilizando assign:\n");
Object.assign(pessoa, detalhes);
console.log(pessoa);

console.log("Buscando as chaves do objeto pessoa:\n");
console.log(Object.keys(pessoa));

console.log("--------------------------------\n");

console.log("Removendo a chave 'cor' do objeto 'pessoa':\n");
delete pessoa.cor;

console.log(pessoa);

console.log("Adicionando a chave 'cor' do objeto 'pessoa':\n");

pessoa.cor = "Negro";
console.log(pessoa);

console.log("--------------------------------\n");
console.log("Alguns métodos de arrays");

let array = [1, 2, 3, 4, 5];

console.log("Array original: \n" + array);
let array2 = array.push(6, 7, 8, 9, 10);

console.log("Array depois do push:" + array + "\nComprimento do array: " + array2);

let array3 = array.pop();
console.log("Removendo o último elemento do array com pop: " + array + "\nValor do elemento removido: " + array3);

let array4 = array.shift();
console.log("Removendo o primeiro do array: " + array + "\nValor do primeiro elemento removido: " + array4);

let array5 = array.unshift(0, -1, -2, 1);

console.log("Array depois do unshift: " + array + "\nComprimento do array: " + array5);

console.log("Indíce do número '6': " + array.indexOf(6));
console.log("Retorna '-1' quando não encontra o valor de busca: " + array.indexOf(11));

console.log("Indíce do numero '6': " + array.lastIndexOf(3, 5));

console.log("Array original atual: " + array);
arrayCopia = array.slice(0, array.length);

console.log("Array copia: " + arrayCopia);
