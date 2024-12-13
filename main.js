const form = document.getElementById('cadastro-form');
const listaNomes = [];
const listaTelefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('cadastro-nome');
    const inputTelefone = document.getElementById('cadastro-telefone');

    if (listaNomes.includes(inputNome.value)) {
        alert(`O contato: "${inputNome.value}" já foi cadastrado`);
    } else if (listaTelefones.includes(inputTelefone.value)) {
        alert(`O telefone: "${inputTelefone.value}" já foi cadastrado`);
    } else {
        listaNomes.push(inputNome.value);
        listaTelefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha + `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
