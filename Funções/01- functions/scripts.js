console.log("About functions\n");

function imprimir() {
    console.log("Imprimindo atráves de uma função!");
}

imprimir();

const valueRandom = function random() {
    return Math.random();
}

console.log("Esta é o número aleatório gerado: " + valueRandom());