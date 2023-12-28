const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

const paragrafoHistoriaUm = document.querySelector('#paragrafoHistoriaUm');
const mensagemBoasVindas = document.querySelector('#mensagemBoasVindas');

const botaoSimbora = document.querySelector("#botaoSimbora");

mensagemBoasVindas.innerHTML = `Seja bem-vindo(a), ${usuario.nome}!`;

paragrafoHistoriaUm.innerHTML = `Tudo bem com você? Espero que sim!</br>Nas próximas páginas, embarcaremos em uma jornada que vai gerar uma história temática com base nas informações preenchidas durante o seu cadastro. </br>Ela vai contar com um pouco de diversão e lições de moral importantes que vão servir de incentivo ao usuário. Vamos lá?`;

botaoSimbora.addEventListener('click', ()=> {
    window.location.href = 'historiaDois.html';
});