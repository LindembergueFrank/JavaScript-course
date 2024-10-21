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



 