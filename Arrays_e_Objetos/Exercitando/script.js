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

console.log("Utilizando o foreach:")
array.forEach(numero => console.log(numero));

console.log("Usando 'includes' para verificar se há o valor 11 no array: " + array.includes(11));
console.log("Array original: " + array);
console.log("Array reverso: " + array.reverse());

console.log("\n Alguns metodos de string\n");

let string = "    Matheus      ";

console.log("\nString original: " + string);
stringSemEspacos = string.trim();
console.log("Removendo espaços do array de Strings: " + stringSemEspacos);

console.log("Preenchendo uma string com '-' no começo da string: " + stringSemEspacos.padStart(30, "-"));
console.log("Preenchendo uma string com '-' no final da string: " + stringSemEspacos.padEnd(30, "-"));

let novaString = "Uma string com varios espacos ";

console.log("\nString atual: " + novaString);

let stringSplit = novaString.split(" ");

console.log("\Palavras contidas na string separadas por ' ' atual: " + stringSplit);
console.log("Trocando espacos por '-': " + stringSplit.join("-"));
console.log(stringSplit.join(" "));

let stringRepeat = novaString.repeat(2);

console.log("\nString repetida duas vezes: " + stringRepeat);

console.log("-------------");

let n1 =5, n2 = 4, n3 = 7, n4 = 9;

function variosParametros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

console.log("Função número de argumentos indetermidados:");
variosParametros(n1, n2, n3, n4);
console.log("----------------");
variosParametros(n1, n4);

console.log("\nExtraindo dados de um objeto com destructing");

let nomeSobrenome = {
    nome: "Matheus",
    sobrenome: "Cocao",
};

let {nome: meuNome, sobrenome: meuSobrenome} = nomeSobrenome;
console.log(meuNome + " " + meuSobrenome);

console.log("\nExtraindo dados de um array com destructing");
let arrayNovo = ["Mathias", "Marcos", "Zara", "Fein"];

let [primeiroNome, segundoNome, terceiroNome, quartoNome] = arrayNovo;

console.log(primeiroNome + " " + segundoNome + " " + terceiroNome + " " + quartoNome);