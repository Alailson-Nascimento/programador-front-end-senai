let inputTarefa = document.getElementById("inputTarefa");

let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");

function adicionarTarefa() {

let texto = inputTarefa.value;

if (texto === "") {
        alert("Digite uma tarefa!");
         return;
    }

    let item = document.createElement("li");
let spanTexto = document.createElement("span");  

    spanTexto.innerText = texto; 
    let btnRemover = document.createElement("button");  
    btnRemover.innerText = "X";  
    btnRemover.className = "remover"

    btnRemover.addEventListener("click", function() {
        listaTarefas.removeChild(item);
    });
   
 item.appendChild(spanTexto);
 item.appendChild(btnRemover);

    listaTarefas.appendChild(item)
   
    inputTarefa.value = "";
}
btnAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});