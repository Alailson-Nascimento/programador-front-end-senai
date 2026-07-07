let numeroExibido = document.getElementById("numero");
let botaoMais = document.getElementById("btnMais");
let botaoMenos = document.getElementById("btnMenos");
let botaoResetaContagem = document.getElementById("btnReset");



let contador = 0;

 function aumentar() {
    contador = contador + 1;
    numeroExibido.innerText = contador;  
}

 function diminuir() {
    contador = contador - 1;
    numeroExibido.innerText = contador;

}

function resetaContagem() {
    contador = 0;
    numeroExibido.innerText = contador;

}

botaoMais.addEventListener("click", aumentar);
botaoMenos.addEventListener("click", diminuir);
botaoResetaContagem.addEventListener("click", resetaContagem);