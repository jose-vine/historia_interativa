const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

const paragrafoHistoriaTres = document.querySelector("#paragrafoHistoriaTres");

paragrafoHistoriaTres.innerHTML = `Falando em desafios, que tal ajudarmos na sua trajetória até lá?</br></br> Na página seguinte, você vai se deparar com um jogo da memória. Eu sei que um jogo da memória não fará com que você trabalhe com ${usuario.profissaoAlmejada}, mas fornecerá ao usuário uma reflexão sobre os desafios que a vida nos impõe. </br>Sem mais delongas, o objetivo do jogo da memória é desvirar pares idênticos de cartas com o menor número de tentativas. O usuário que conseguir fazer isso, será vencedor.</br> A pontuação funcionará da seguinte forma:
</br>- 10 pontos a mais para cada acerto (pares iguais de cartas)
</br>- 1 ponto a menos para cada erro (pares desiguais de cartas)
</br>Ao final do jogo, você terá acesso a um placar que compara a sua pontuação com os demais usuários cadastrados na nossa página interativa.
Portanto, acredito que já temos tudo para começar, basta se direcionar para a próxima página. </br>Está pronto, ${usuario.apelido}?
`;