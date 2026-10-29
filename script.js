
let campoAdicionar = document.getElementById('buttonAdicionar');
let campoTarefa = document.getElementById('novastarefas');

campoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let textoTarefa = campoTarefa.value;

    if (textoTarefa.trim() === "") {
        document.getElementById("mensagem").textContent = "Digite uma tarefa";
    } else {
        document.getElementById("mensagem").textContent = "";

        let itemTarefa = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let texto = document.createElement("span");
        texto.textContent = textoTarefa;

        // Riscar a tarefa quando ela for concluída
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                texto.style.textDecoration = "line-through";
            } else {
                texto.style.textDecoration = "none";
            }
        });

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(texto);

        let listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.appendChild(itemTarefa);

        campoTarefa.value = "";
    }
});


// Riscar as tarefas que já existem no HTML
let checkboxesExistentes = document.querySelectorAll(
    "#listaTarefas input[type='checkbox']"
);

checkboxesExistentes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        let texto = checkbox.nextElementSibling;

        if (checkbox.checked) {
            texto.style.textDecoration = "line-through";
        } else {
            texto.style.textDecoration = "none";
        }
    });
});



// Remover elemento ao clicar no icone da lixeira 
let botoesExcluir = document.querySelectorAll(
    "#listaTarefas button"
);

botoesExcluir.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botao.closest("li").remove();
    });
});

