window.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        console.log('Tecla ENTER pressionada!');
    } else if (e.key == 'q') {
        console.log('Tecla q pressionada!');
    }
})

window.addEventListener('keyup', function(e){
    console.log(`Tecla ${e.key} liberada!`);
})