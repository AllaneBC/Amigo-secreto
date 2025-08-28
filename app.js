let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    input.value = "";  
    exibirListaAmigos();
}

function exibirListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement("li");
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);

    }  
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
    } else {
        alert('Nenhum amigo na lista. Adicione nomes para sortear.');
        return;
    }
}