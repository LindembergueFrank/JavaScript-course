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
    
    adicionarItem(item) {
        let contador = 0;

        for(let itensCarrinho in this.itens) {
            if(this.itens[itensCarrinho].id == item.id) {
                this.itens[itensCarrinho].quantidadeTotal += item.quantidade;
                contador = 1;
            }
        }

       if(contador == 0) {
        this.itens.push(item);
       }
        
        this.quantidadeTotal += item.quantidade;
        this.valorTotal += item.preco * item.quantidade;
    }

    removerItem(item) {
        for(let itensCarrinho in this.itens) {
            if(this.itens[itensCarrinho].id == item.id) {
                let obj = this.itens[itensCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id; });

                this.quantidadeTotal -= obj.quantidade;
                this.valorTotal -= obj.preco * obj.quantidade;
                this.itens.splice(index,1);
            }
        }
    }
}

let carrinho = new carrinhoDeCompras([
    {
    codigo: 1,
    nome: "Camiseta",
    quantidade: 2,
    preco: 150
    },
    {
    codigo: 2,
    nome: "Calça",
    quantidade: 2,
    preco: 200
    }
], (4), (700));


console.log(carrinho);

carrinho.adicionarItem({codigo: 3, nome: "Short", quantidade: 2, preco: 150});

carrinho.adicionarItem({codigo: 3, nome: "Short", quantidade: 2, preco: 150});
console.log(carrinho);

carrinho.removerItem({codigo: 3, nome: "Short", quantidade: 2, preco: 150});
console.log(carrinho);

console.log("\nQuestion 3");

class EnderecoCliente {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set newRua(newRua) {
        this.rua = newRua;
    }

    set newBairro(newBairro) {
        this.bairro = newBairro;
    }

    set newCidade(newCidade) {
        this.cidade = newCidade;
    }

    set newEstado(newEstado) {
        this.estado = newEstado;
    }
}

let endereco = new EnderecoCliente("Rua dos Bobos", "Bairro do Meio", "São Paulo", "SP");
console.log(endereco);

endereco.newRua = "Rua das Flores";
endereco.newCidade = "Cidade Jardim";

console.log(endereco);

console.log("\nQuestion 4");

class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigirCarro(dirigindo) {
        while (dirigindo == true) {
            this.gasolinaRestante -= 3;
            if (this.gasolinaRestante <= 20) {
                console.log("Atenção! Gasolina acabando, reabasteça!");
                dirigindo = false;

            }
        }
    }

    abastecerCarro (dirigindo) {
        if (dirigindo == true && this.gasolinaRestante <= 20) {
            this.gasolinaRestante = 100;
            console.log("Carro abastecido com sucesso!");
        }
    }
}

let carro = new Carro("Fiat", "Prata", 50);

console.log(carro);

carro.dirigirCarro(true);

console.log(carro);
carro.abastecerCarro(true); 
console.log(carro);