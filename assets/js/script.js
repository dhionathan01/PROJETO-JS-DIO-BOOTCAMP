let numeroAtualLocal = document.getElementById('numeroAtual');
let numeroAtual = 0;

let botaoIncrementar = document.getElementById('incrementar');
let botaoDecrementar = document.getElementById('decrementar');

botaoIncrementar.addEventListener("click", incrementar);
botaoDecrementar.addEventListener("click", decrementar);

function decrementar() {
    numeroAtualLocal.innerHTML = numeroAtual -= 1;
        colorChange();
}

function incrementar() {
    numeroAtualLocal.innerHTML = numeroAtual += 1;
    colorChange();
}

function colorChange() {
    if (numeroAtual > 0) {
        numeroAtualLocal.style.color = "green";
    } else if (numeroAtual < 0) {
        numeroAtualLocal.style.color = "red";
    }
    else {
        numeroAtualLocal.style.color = "gray";
    }
}



