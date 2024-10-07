console.log("Question 1");

let array = ["Matheus", "Gabriel", "Bergue", "Olavo", "Ruth" ,"Roman"];
console.log(array);

console.log("Acessando os itens 1, 3 e 4: " + array[0] + ", " + array[2] + ", " + array[3]);

console.log("\nQuestion 2");

let array2 = [1, 2];
let array3 = [3, 4, 5, 6];

console.log("Array2 tem " + array2.length + " elementos");
console.log("Array3 tem " + array3.length + " elementos");

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

console.log("\nQuestion 6");
let array5 = [10, 11, 12, 13, 14];

function quantidadeDeElementos(arrayTest) {
    if (arrayTest.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

console.log("Array5: ");
quantidadeDeElementos(array5);
console.log("Array3: ");
quantidadeDeElementos(array3);

console.log("\nQuestion 7");
console.log("Imprimindo por iteração: ");
for(var i=0; i<array5.length; i++) {
    console.log(array5[i]);
}

console.log("\nQuestion 8");
console.log("Criando um JSON com 4 proriedades");

let pessoa = {
    "name": "Marcos",
    "email": "marcoide19@gmail.com",
    "idade": 25,
    "languages": ["C#", "Java", "JavaScript", "Python"]
};

console.log(pessoa.name + ", " + pessoa.email + ", " + pessoa.idade + ", " + pessoa.languages);

console.log("\nQuestion 9");
let string = "String que sera dividida por palavras e guardadas em um array";
console.log(string);

let arrayString = string.split(" ");

console.log("\nArray com palavras da string: ");
for (let i = 0; i <arrayString.length; i++) {
    console.log(arrayString[i]);
}

console.log("\nQuestion 10");

let calculadora = {
    soma: function(numero1, numero2) {
        return numero1 + numero2;
    },
    subtracao: function(numero1, numero2) {
        return numero1 - numero2;
    },
    multiplicar: function(numero1, numero2) {
        return numero1 * numero2;
    },
    dividir: function(numero1, numero2) {
        if(numero2!= 0) {
            return numero1 / numero2;
        } else {
            return "Não é possível realizar divisão por zero";
        }
    }
}

console.log("Soma de 5 + 3: " + calculadora.soma(5, 3));
console.log("Subtracao de 5 - 3: " + calculadora.subtracao(5, 3));
console.log("Multiplicacao de 5 x 3: " + calculadora.multiplicar(5, 3));
console.log("Divisao de 10 / 2: " + calculadora.dividir(10, 2));
console.log("Divisao de 10 / 0: " + calculadora.dividir(10, 0));