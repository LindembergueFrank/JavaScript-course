let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('mousedown', function() {
    console.log('Pressionando o click esquerdo');
});

btn1.addEventListener('mouseup', function() {
    console.log('Soltando o click esquerdo');
});

btn2.addEventListener('dblclick', function() {
    console.log('Dando dois cliques');
});

btn2.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('Pressionando o click direito');
});