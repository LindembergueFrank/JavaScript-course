let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let name = prompt('Digite seu nome:');
    alert(`Olá, ${name}!`);
    console.log("Clicou em mim!");
});