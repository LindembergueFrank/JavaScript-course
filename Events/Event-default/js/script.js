let a = document.querySelector('a');

a.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Não vai mudar de link");
})
