let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function msg() {
    console.log('Clicou em mim!');
}

function removeEvent() {
    btn1.removeEventListener('click', msg, false);
    console.log('Removido o evento do botão!');
}

btn1.addEventListener('click', msg, false);
btn2.addEventListener('click', removeEvent, false);