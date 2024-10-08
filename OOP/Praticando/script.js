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

console.log("\nQuestion 2");

class carrinhoDeCompras {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }
    
    adicionarItem(itens, quantidade, valor) {

        for(let i=0; i<quantidade; i++) {
            this.itens.push(itens);
            this.quantidade++;
        }

        this.valorTotal += valor;
        this.quantidadeTotal += quantidade;
    }

    removerItem(itens, quantidade, valor) {
        for(let i=0; i<quantidade; i++) {
            if(itens == this.itens[i]) {
                this.itens.splice(i, 1);
                this.quantidade--;
                break;
            }
        }

        this.valorTotal -= valor;        
    }
}

let carrinho = new carrinhoDeCompras([
    {
    codigo: 1,
    nome: "Camiseta",
    quantidade: 2,
    preco: 150
    } ,
    {
    codigo: 2,
    nome: "Calça",
    quantidade: 2,
    preco: 200
    }
], (4), (700));


console.log(carrinho);

let itensAdicionados = [
    {
        codigo: 3,
        nome: "Bermuda",
        quantidade: 1,
        preco: 120
    }, 
    {
        codigo: 4,
        nome: "Tênis",
        quantidade: 1,
        preco: 180
    }
]

carrinho.removerItem(itensAdicionados, 2, 300);
console.log("----------------------------");
carrinho.adicionarItem(itensAdicionados, 2, 300);
console.log(carrinho);