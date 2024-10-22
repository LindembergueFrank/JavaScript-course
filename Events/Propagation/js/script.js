let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');

function msg(e) {
    console.log("Clicou no botao!");
    e.stopPropagation();
}

btn1.addEventListener('click', msg, false);

btn2.addEventListener('click', function(e) {
    console.log(e);
});

p.addEventListener('click', () => {
    console.log("Clicou no parágrafo");
});