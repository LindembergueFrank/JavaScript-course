let pessoa = {
    "nome": "Matheus Cocao",
    "sexo": 'M',
    "idade": 27,
};

console.log("Convertendo Json para String e vice-versa");

pessoaString = JSON.stringify(pessoa);
console.log(pessoaString);

let pessoaJson = JSON.parse(pessoaString);
console.log(pessoaJson);