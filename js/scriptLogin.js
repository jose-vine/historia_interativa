const inputApelido = document.querySelector('#inputApelido');
const botaoEntrar = document.querySelector('#botaoEntrar');
const mensagemErro = document.querySelector('#mensagemErro');

botaoEntrar.addEventListener('click', ()=>{
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioExiste = false;

    if (usuarios != null) {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].apelido == inputApelido.value) {
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[i]));
                usuarioExiste = true;
                break;
            }
        }

        if (usuarioExiste) {
            window.location.href = 'historiaUm.html';
        } else {
            mensagemErro.innerHTML = 'Esse apelido não existe!';
        }
    } else {
        mensagemErro.innerHTML = 'Esse apelido não existe!';
    }

});

inputApelido.addEventListener('focusout', ()=>{
    mensagemErro.innerHTML = '';
});