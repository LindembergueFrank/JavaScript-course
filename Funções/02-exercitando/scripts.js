console.log("\nQuestion 1\n");

function outText() {
    console.log("Hello World! Utilizando função!\n");	
}

outText();

console.log("\nQuestion 2\n");

function outAge(idade) {
    console.log(`Você tem ${idade} anos.`);   
}

outAge(25);


console.log("\nQuestion 3\n");

function sumTwoNumbers(numero1, numero2) {
    return numero1 + numero2;
}

console.log(sumTwoNumbers(5, 13));

console.log("\nQuestion 4\n");

function numberRandom(numeroMax) {
    numeroMax = Math.floor(numeroMax);

    return Math.floor(Math.random() * numeroMax) + 1;
}

console.log(numberRandom(11));

console.log("\nQuestion 5\n");

function autoEscola(age) {
    if (age >= 18) {
        console.log("Você pode entrar na auto-escola!");
    } else {
        console.log("Você não pode entrar na auto-escola! Idade insuficiente.");
    }
}

autoEscola(18);
autoEscola(17);

console.log("\nQuestion 6\n");

function comparatorType(type) {
    if (typeof type === "string") {
        console.log("O tipo é string");
    } else if (typeof type === "boolean") {
        console.log("O tipo é boolean");
    } else if (typeof type === "number") {
        console.log("O tipo é number");
    } else {
        console.log("Tipo desconhecido, reveja se passou o parametro corretamente");
    }
}

comparatorType(18);
comparatorType("Aqui esta uma string");
comparatorType(false);
comparatorType();
comparatorType(true);

console.log("\nQuestion 7\n");

const positiveNumber = (n) => {
    return Math.abs(n);
}

console.log(positiveNumber(-5));

console.log("\nQuestion 8\n");

function countString(string) {
    if (string.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

countString("Este texto possui 9 caracteres");
countString("Curto");

console.log("\nQuestion 9\n");

function potencia(base, potencia) {
    return Math.pow(base, potencia);
}

console.log(potencia(2, 3));
console.log(potencia(3, 2));

console.log("\nQuestion 10\n");

function comparatorNumbers(numero) {
    for (let i = numero; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(`Número par: ${i}`)
        }
    }
}

comparatorNumbers(10);