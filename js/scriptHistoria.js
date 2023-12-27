const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

const paragrafoHistoria = document.querySelector('#paragrafoHistoria');

paragrafoHistoria.innerHTML = `Seja bem-vindo(a), ${usuario.nome}! <br>Tudo bem com você? Espero que sim!</p><br><p>Nas próximas páginas, embarcaremos em uma jornada que vai gerar uma história temática com base nas informações preenchidas durante o seu cadastro. <br>Ela vai contar com um pouco de diversão e lições de moral importantes que vão servir de incentivo ao usuário. Vamos lá?`;