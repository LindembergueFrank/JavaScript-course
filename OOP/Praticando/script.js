console.log("Question 1");

class contaBancaria {
    constructor(titular, numero,saldo) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
    }
    
    depositar(saldo) {
        this.saldo += saldo;
        console.log(`Depositado: ${saldo}, Saldo Atual: ${this.saldo}`);
    }

    saque(saldo) {
        if(this.saldo >= saldo) {
            this.saldo -= saldo;
            console.log(`Saque: ${saldo}, Saldo Atual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

let conta1 = new contaBancaria("Lindembegue", "6128541-8", 900);
console.log(conta1);

conta1.depositar(500);
conta1.saque(1000);
