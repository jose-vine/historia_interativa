const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

const tituloHistoriaUm = document.querySelector('#tituloHistoriaUm');

const paragrafoHistoriaDois = document.querySelectorAll('.paragrafoHistoriaDois');
const paragrafoHistoriaTres = document.querySelectorAll('.paragrafoHistoriaTres');

const botaoSimbora = document.querySelector("#botaoSimbora");
const botaoContinuar = document.querySelector("#botaoContinuar");
const botaoVamos = document.querySelector("#botaoVamos");

if (tituloHistoriaUm) {
    tituloHistoriaUm.innerHTML = `Seja bem-vindo(a), ${usuario.nome}!`;
}

if (paragrafoHistoriaDois) {
    for (let i = 0; i < paragrafoHistoriaDois.length; i++) {
        if (i == 0) {
            paragrafoHistoriaDois[i].innerHTML = `Que tal ficarmos um pouco mais íntimos?`;
        } else if (i == 1) {
            paragrafoHistoriaDois[i].innerHTML = `A partir de agora, vou te chamar de ${usuario.apelido}.`;
        } else if (i == 2) {
            paragrafoHistoriaDois[i].innerHTML = `Sei que você tem ${usuario.idade} anos e pretende trabalhar com ${usuario.profissaoAlmejada} no(a) ${usuario.lugarTrabalho}.`;
        } else if (i == 3) {
            paragrafoHistoriaDois[i].innerHTML = `Pois bem, a escolha de uma profissão é um passo fundamental na vida de qualquer pessoa. Trabalhar com aquilo que gosta talvez seja uma das maiores satisfações para o indivíduo que almejou ingressar em alguma carreira profissional.`;
        } else if (i == 4) {
            paragrafoHistoriaDois[i].innerHTML = `Mas a vida não é feita só de flores. Os espinhos são obstáculos que todos nós deveremos enfrentar. Não importa se você pretende seguir ${usuario.profissaoAlmejada} ou qualquer outra profissão, saiba que o caminho até lá será formado por altos e baixos.`;
        }
    }
}

if (paragrafoHistoriaTres) {
    for (let i = 0; i < paragrafoHistoriaTres.length; i++) {
        if (i == 0) {
            paragrafoHistoriaTres[i].innerHTML = `Falando em desafios, que tal ajudarmos na sua trajetória até lá?`;
        } else if (i == 1) {
            paragrafoHistoriaTres[i].innerHTML = `Na página seguinte, você vai se deparar com um jogo da memória. Eu sei que um jogo da memória não fará com que você trabalhe com ${usuario.profissaoAlmejada}, mas fornecerá ao usuário uma reflexão sobre os desafios que a vida nos impõe.`;
        } else if (i == 2) {
            paragrafoHistoriaTres[i].innerHTML = `Sem mais delongas, o objetivo do jogo da memória é desvirar pares idênticos de cartas com o menor número de tentativas. O usuário que conseguir fazer isso, será vencedor. A pontuação funcionará da seguinte forma:`;
        } else if (i == 3) {
            paragrafoHistoriaTres[i].innerHTML = `- 10 pontos a mais para cada acerto (pares iguais de cartas)`;
        } else if (i == 4) {
            paragrafoHistoriaTres[i].innerHTML = `- 1 ponto a menos para cada erro (pares desiguais de cartas)`;
        } else if (i == 5) {
            paragrafoHistoriaTres[i].innerHTML = `Ao final do jogo, você terá acesso a um placar que compara a sua pontuação com a dos demais usuários cadastrados na nossa página interativa. Portanto, acredito que já temos tudo para começar, basta se direcionar para a próxima página. Está pronto, ${usuario.apelido}?`;
        }
    }
}

if (botaoSimbora) {
    botaoSimbora.addEventListener('click', ()=> {
        window.location.href = 'historiaDois.html';
    });
}

if (botaoContinuar) {
    botaoContinuar.addEventListener('click', ()=> {
        window.location.href = 'historiaTres.html';
    });
}

if (botaoVamos) {
    botaoVamos.addEventListener('click', ()=> {
        window.location.href = '#';
    });
}