let promessa = Promise.resolve(5 + (3*5));

console.log("Valor da promessa: ");

promessa.then((valor) => {return valor / 2})
.then((valor) => {console.log(valor)});

console.log("------");

// Lidando com erros com Promisse

let promiseError = Promise.resolve(new Error("Promise falhou"));

console.log("\nCaputando erros com Promise");

promiseError.then((valor) => {console.log(valor)})
.catch((erro) => {console.log("Falha: " + erro)});

console.log("Utilizando reject com Promise");

function verificaNumber (num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log("Promise passou no teste"));
        }else {
            reject(new Error("Promise falhou!"));
        }
    });
}

verificaNumber(2);
verificaNumber(3);

console.log|("Múltiplas promises");

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 5000)
});

const p2 = Promise.resolve(18);

const p3 = new Promise((resolve, reject) =>{
    resolve(20);
});

Promise.all([p1, p2, p3]).then((valores) => console.log(valores));