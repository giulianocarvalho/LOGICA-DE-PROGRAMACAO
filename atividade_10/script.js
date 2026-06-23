let produtos = [];

const formulario = document.getElementById("formProduto");

formulario.addEventListener("submit", cadastrarProduto);

function cadastrarProduto(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const produto = {
        nome: nome,
        categoria: categoria,
        quantidade: quantidade,
        preco: preco
    };

    produtos.push(produto);

    atualizarTabela();

    formulario.reset();
}

function atualizarTabela() {
    const tabela = document.getElementById("tabelaProdutos");

    tabela.innerHTML = "";

    produtos.forEach((produto, indice) => {
        tabela.innerHTML += `
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${produto.preco}</td>
                <td>
                    <button
                        class="btn btn-danger btn-sm"
                        onclick="excluirProduto(${indice})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

function excluirProduto(indice) {
    produtos.splice(indice, 1);
    atualizarTabela();
}