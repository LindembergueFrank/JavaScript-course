console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].innerHTML);

// Encontrando elementos por tag
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('li'));

// Encontrando elementos por ID 
console.log(document.getElementById('titulo-principal'));

// Encontrando elementos por classe
console.log(document.getElementsByClassName('itens-amarelos'));

// Encontrando elementos por query
console.log(document.querySelector('h1'));
console.log(document.querySelector('#titulo-principal'));
console.log(document.querySelector('.itens-amarelos'));

// Inserindo nó 
let newElement = document.createElement('span');
let elementAlvo = document.querySelector('#titulo-principal');
let elementFather = elementAlvo.parentNode;

elementFather.insertBefore(newElement, elementAlvo);

// Adicionando nó ao final da lista de filhos
let newElement2 = document.createElement('p');
let texto = document.createTextNode("Frase adicionando com métodos");
newElement2.appendChild(texto);

let p = document.querySelector("#titulo-principal");
let pai = p.parentNode;

pai.appendChild(newElement2);

// Substituir elemento filho especificado por outro
let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(newElement2, heading);

// Criando nós de texto
let semTexto = document.querySelector('#sem-texto');
let texto2 = document.createTextNode("Inserindo este texto");

semTexto.appendChild(texto2);

// Criando elementos com metodos do DOM
let list = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    let itens = document.createElement("li");
    let textoItens = document.createTextNode("Itens exemplares " + i);
    itens.appendChild(textoItens);
    list.appendChild(itens);
}

let container = document.getElementById("container-sub");
container.appendChild(list);

 // get e set Attribute
let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let link = 'https://www.google.com/';

a.setAttribute("href", link);

// altura e largura do elemento
let teste = document.getElementById("subtitulo");

console.log("Altura do elemento H2 com as bordas: " + teste.offsetHeight);
console.log("Largura do elemento H2 com as bordas: " + teste.offsetWidth);
console.log('-----------');
console.log("Altura do elemento H2 sem as bordas: " + teste.clientHeight);
console.log("Largura do elemento H2 sem as bordas: " + teste.clientWidth);

// Estilizando com JS
teste.style.color = 'green';

// Selecionar vários elementos com query
let itens = document.querySelectorAll('.itens-amarelos');

console.log(itens);