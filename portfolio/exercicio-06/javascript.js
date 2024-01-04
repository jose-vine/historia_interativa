const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarCadastro);


function adicionarCadastro() {
    // Criação das divs
    const novoCadastro = document.createElement('div');
    const colunaNome = document.createElement('div');
    const colunaNota = document.createElement('div');

    // Criação dos atributos
    const atributoNovoCadastro = document.createAttribute('class');
    atributoNovoCadastro.value = 'novoCadastro';
    const atributoColunaNome = document.createAttribute('class');
    atributoColunaNome.value = 'colunaAluno';
    const atributoColunaNota = document.createAttribute('class');
    atributoColunaNota.value = 'colunaNota';

    // Setando os atributos
    novoCadastro.setAttributeNode(atributoNovoCadastro);
    colunaNome.setAttributeNode(atributoColunaNome);
    colunaNota.setAttributeNode(atributoColunaNota);

    const nomeAluno = document.createTextNode(document.getElementById('nome').value);
    const notaAluno = document.createTextNode(document.getElementById('nota').value);

    // Adicionando as colunas à div principal
    novoCadastro.appendChild(colunaNome);
    novoCadastro.appendChild(colunaNota);

    colunaNome.appendChild(nomeAluno);
    colunaNota.appendChild(notaAluno);

    // Adicionando os cadastros à página
    const alunosCadastros = document.getElementById('alunosCadastros');
    alunosCadastros.appendChild(novoCadastro);

    console.log(alunosCadastros);
}