const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

const paragrafoHistoriaDois = document.querySelector('#paragrafoHistoriaDois');

const botaoContinuar = document.querySelector("#botaoContinuar");

paragrafoHistoriaDois.innerHTML = `Que tal ficarmos um pouco mais íntimos?</br></br> A partir de agora, vou te chamar de ${usuario.apelido}. Sei que você tem ${usuario.idade} anos e pretende trabalhar com ${usuario.profissaoAlmejada} no(a) ${usuario.lugarTrabalho}. </br>Pois bem, a escolha de uma profissão é um passo fundamental na vida de qualquer pessoa. </br>Trabalhar com aquilo que gosta talvez seja uma das maiores satisfações para o indivíduo que almejou ingressar em alguma carreira profissional. </br>Mas a vida não é feita só de flores. Os espinhos são obstáculos que todos nós deveremos enfrentar. </br>Não importa se você pretende seguir ${usuario.profissaoAlmejada} ou qualquer outra profissão, saiba que o caminho até lá será formado por altos e baixos. `;

botaoContinuar.addEventListener('click', ()=> {
    window.location.href = 'historiaTres.html';
});