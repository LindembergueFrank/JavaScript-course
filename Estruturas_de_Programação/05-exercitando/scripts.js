console.log("1 - Question\n");

let numbero = 21;
let boolean = false;
let string = "Esta é um exemplo de string";

console.log(typeof numbero);
console.log(typeof boolean);
console.log(typeof string);

console.log("\n2 - Question\n");
let idade = 18;

if (idade > 18) {
    console.log("Pode entrar!\n");
} else {
    console.log("Não pode entrar!\n");
}

console.log("\n3 - Question\n");

const name = "Bergue";

if (name == "Bergue") {
    console.log(`Nome correto! Saudações ${name}\n`);
} else {
    console.log(`Nome incorreto! O nome correto é "${name}"\n`);
}

console.log("\n4 - Question\n");

let potencia = [3];

for( i = 0; i < 3; i++) {
    console.log("Iterando...\n");
    let array = [2, 3, 18];
    let resul = Math.pow(array[i], 2);
    potencia[i] = resul;
}

console.log(potencia);

console.log("\n5 - Question\n");

const velocidadePermitida = 80;
let velocidade = Math.pow(10,2);
console.log(`Velocidade do motorista: ${velocidade}km/h. Velocidade permitidade: ${velocidadePermitida}km/h\n`);

if (velocidade > velocidadePermitida){
    console.log("Você ultrapassou a velocidade permitida! Aqui está a sua multa.\n");
} else {
    console.log("Você não ultrapassou a velocidade permitida. Pode seguir em frente!\n");
}

console.log("\n6 - Question\n");

let idade2 = 18;
let cnh = true;

if (idade2 >= 18 && cnh == true) {
    console.log("Pode dirigir!\n");
} else if (idade2 >= 18 && cnh == false) {
    console.log("Não pode dirigir! Não possui CNH\n");
}else {
    console.log("Você não tem idade suficiente para dirigir!\n");
}

console.log("\n7 - Question\n");
let a = 0

while (a <= 10) {
    console.log(`Iterando... ${a}\n`);
    a++;
}

console.log("\n8 - Question\n");

for (let k=100; k >= 50; k--) {
    console.log(k);
}

console.log("\n9 - Question\n");

let contador = 0;

while(contador <= 50){
    if (contador % 2 == 0 && contador > 0) {
        console.log(`O número ${contador} é par`);
    } else if (contador % 2 == 1 && contador>0){
        console.log(`O número ${contador} é ímpar`);
    }
    contador++;
}

console.log("\n10 - Question\n");

let numeroPrimo = 103;
let divisor = 0;

for (let i = 1; i <= numeroPrimo; i++) {
    if (numeroPrimo % i == 0) {
        divisor++;
    }
}

if (divisor == 2) {
    console.log(`${numeroPrimo} é um número primo.`);
} else {
    console.log(`${numeroPrimo} não é um número primo.`);
}