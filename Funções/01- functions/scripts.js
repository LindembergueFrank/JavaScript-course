console.log("About functions\n");

function imprimir() {
    console.log("Imprimindo atráves de uma função!");
}

imprimir();

const valueRandom = function random() {
    return Math.random();
}

console.log("Esta é o número aleatório gerado: " + valueRandom());

console.log("\n------------- Arrow Funcions -------------\n");

const arrowFunction = () => {
    console.log("Imprimindo através de uma Arrow Function!");
};

arrowFunction();
let value = 64;

const raizQuadrada = n => Math.sqrt(n);
console.log(`A raiz quadradade de ${value} é ` + raizQuadrada(64) + "!\n");

console.log("\nArgumentos opcionais\n");

function compraDeBebidas(name, age) {
    if (name != undefined && age != undefined) {
        console.log(`Olá, ${name}! `);
        if (age >= 18) {
            console.log("Você pode comprar bebidas!");
        } else {
            console.log("Você não pode comprar bebidas! Idade do cliente: " + age);
        }
    } else {
        console.log("Nome ou idade não informado!");
    }
}

compraDeBebidas("João");

console.log("\nArgumentos com valor default\n");

function imprimirNumeros (frase, numero = 5) {
    for (let i = 1; i <= numero; i++) {
        console.log(frase + " Iterador: " + i);
    }
}

imprimirNumeros("Imprimindo um número");
imprimirNumeros("Imprimindo um número", 3);

console.log("\nClasure\n");

function lembrarSoma(x) {
    return function (y) {
        return x + y*2;
    }
}

let soma = lembrarSoma(5);

console.log(soma(3)); 

console.log("\nRecursão\n");

function numeroPar(n) {
    if (n - 1 <= 2) {
        console.log("Recursão parou");

    } else if (n % 2 == 0) {
        console.log("Número par: " + n);
        numeroPar(n - 2);
    } else {
        console.log("Número impar: " + n);
        numeroPar(n - 1);
    }
}

numeroPar(11);