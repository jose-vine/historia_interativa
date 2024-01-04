const botaoSoma = document.getElementById('botaoSoma')
botaoSoma.addEventListener('click', somar)

function somar() {
    const valorUm = document.getElementById('numeroUm').value
    const valorDois = document.getElementById('numeroDois').value
    const resultadoOperacao = document.getElementById('resultadoOperacao')
    
    let resultadoSoma = Number(valorUm) + Number(valorDois)
    resultadoOperacao.innerHTML = `<p id="resultadoValor">${resultadoSoma}</p>`
}

const botaoSubtracao = document.getElementById('botaoSubtracao')
botaoSubtracao.addEventListener('click', subtrair)

function subtrair() {
    const valorUm = document.getElementById('numeroUm').value
    const valorDois = document.getElementById('numeroDois').value
    const resultadoOperacao = document.getElementById('resultadoOperacao')
    
    let resultadoSubtracao = Number(valorUm) - Number(valorDois)
    resultadoOperacao.innerHTML = `<p id="resultadoValor">${resultadoSubtracao}</p>`
}

const botaoMultiplicacao = document.getElementById('botaoMultiplicacao')
botaoMultiplicacao.addEventListener('click', multiplicar)

function multiplicar() {
    const valorUm = document.getElementById('numeroUm').value
    const valorDois = document.getElementById('numeroDois').value
    const resultadoOperacao = document.getElementById('resultadoOperacao')
    
    let resultadoMultiplicacao = Number(valorUm) * Number(valorDois)
    resultadoOperacao.innerHTML = `<p id="resultadoValor">${resultadoMultiplicacao}</p>`
}

const botaoDivisao = document.getElementById('botaoDivisao')
botaoDivisao.addEventListener('click', dividir)

function dividir() {
    const valorUm = document.getElementById('numeroUm').value
    const valorDois = document.getElementById('numeroDois').value
    const resultadoOperacao = document.getElementById('resultadoOperacao')
    
    let resultadoDivisao = Number(valorUm) / Number(valorDois)
    resultadoOperacao.innerHTML = `<p id="resultadoValor">${resultadoDivisao}</p>`
}