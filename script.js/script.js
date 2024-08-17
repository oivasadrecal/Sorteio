const nomes = [];

function adicionarNome() {
    const nome = document.getElementById('nome').value;
    if (nome) {
        nomes.push(nome);
        document.getElementById('nome').value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = '';
    nomes.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nomes.length > 0) {
        const indice = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes[indice];
        document.getElementById('resultado').textContent = `Nome sorteado: ${nomeSorteado}`;
    } else {
        document.getElementById('resultado').textContent = 'Adicione nomes à lista para sortear.';
    }
}
