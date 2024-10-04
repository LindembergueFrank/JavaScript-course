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