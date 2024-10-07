console.log("Question 1");

let array = ["Matheus", "Gabriel", "Bergue", "Olavo", "Ruth" ,"Roman"];
console.log(array);

console.log("Acessando os itens 1, 3 e 4: " + array[0] + ", " + array[2] + ", " + array[3]);

console.log("\nQuestion 2");

let array2 = [1, 2];
let array3 = [3, 4, 5, 6];

console.log("Array 2 tem " + array2.length + " elementos");
console.log("Array 3 tem " + array3.length + " elementos");

console.log("\nQuestion 3");

let onibus = {
    propriedades: 8,
    passageiros: 40,
    portas: 2,
    motorista: "João"
};

console.log(onibus);

console.log("\nQuestion 4");
console.log("Adicionando propriedades 'janelas' e deletando a propriedade 'rodas'");

delete onibus.propriedades;
onibus.janelas = 20;

console.log(onibus);

console.log("\nQuestion 5");
let nomes = ["Mathues", "Marcos", "Sara", "Erick", "Molld"];

for(let i = 0; i < nomes.length; i++) {
    if(nomes[i] == "Marcos") {
        console.log("Nome encontrado: " + nomes[i] + ", encontrado no índice: [" + i + "]");
        break;
    }
}