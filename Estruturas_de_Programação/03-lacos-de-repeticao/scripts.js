console.log("WHILE\n");

let i = 5;

console.log("Ordem decrescente\n");
while(i <= 5 && i != 0) {
    console.log("Valor de x: " + i);
    i--;
}

console.log("\nValor atual de i: " + ++i);

console.log("\nOrdem crescente");
while (i >=0 && i <= 5) {
    console.log("Valor de x: " + i);
    ++i;
}

console.log("\nDO WHILE\n");

let numero = 0;

do {
    console.log("Entra no laço ao menos uma vez, pois " +
        "verifica a condição apenas depois de finalizar " +
     "ao menos uma vez");
}while(numero !=0)

console.log("\nFOR\n");

for(let j = 0; j < 5; j++) {
    console.log("Valor de j: " + j);
}