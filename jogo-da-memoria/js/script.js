const container = document.querySelector('#container');
const cores = [
    'azul',
    'azul',
    'vermelho',
    'vermelho',
    'verde',
    'verde',
    'preto',
    'preto',
    'laranja',
    'laranja',
    'roxo',
    'roxo',
    'cinza',
    'cinza',
    'amarelo',
    'amarelo'
];

function criarElemento(tag, classe) {
    const elemento = document.createElement(tag);
    elemento.className = classe;
    return elemento;
}

function adicionarFilho(pai, filho) {
    pai.appendChild(filho);
}

for (let i = 0; i < 16; i++) {
    const indiceAleatorio = Math.floor(Math.random() * (15-i));
    const carta = criarElemento('div', 'carta');
    const flip = criarElemento('div', 'flip');
    const verso = criarElemento('div', 'verso');
    const frente = criarElemento('div', cores[indiceAleatorio] + ' frente');

    cores.splice(indiceAleatorio, 1);

    adicionarFilho(carta, flip);
    adicionarFilho(flip, verso);
    adicionarFilho(flip, frente);

    if (i % 4 == 0) {
        var bloco = criarElemento('div', 'bloco');
        adicionarFilho(container, bloco);
    }

    adicionarFilho(bloco, carta);
}