const containerCartas = document.querySelector('#cartas');

const criarElemento = (tag, classe) => {
    const elemento = document.createElement(tag);
    elemento.className = classe;
    return elemento;
}

criarElemento('div', 'carta');