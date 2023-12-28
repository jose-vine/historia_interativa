const inputNome = document.querySelector('#inputNome');
const inputApelido = document.querySelector('#inputApelido');
const inputIdade = document.querySelector('#inputIdade');
const inputMusicaFav = document.querySelector('#inputMusicaFav');
const inputCorFav = document.querySelector('#inputCorFav');
const inputComidaFav = document.querySelector('#inputComidaFav');
const inputProducaoAV = document.querySelector('#inputProducaoAV');
const inputAmigo = document.querySelector('#inputAmigo');
const inputLugarFav = document.querySelector('#inputLugarFav');
const inputInspiracao = document.querySelector('#inputInspiracao');
const inputCoisaLouca = document.querySelector('#inputCoisaLouca');
const inputSonho = document.querySelector('#inputSonho');
const inputProfissao = document.querySelector('#inputProfissao');
const inputLugarTrabalho = document.querySelector('#inputLugarTrabalho');
const inputAlgoRefazer = document.querySelector('#inputAlgoRefazer');
const inputAlguemInsuportavel = document.querySelector('#inputAlguemInsuportavel');

const botaoProsseguir = document.querySelector('#botaoProsseguir');
const botaoFinalizar = document.querySelector('#botaoFinalizar');

if (botaoProsseguir) {

    botaoProsseguir.addEventListener('click', ()=>{
        let usuario = new Object();

        usuario.nome = inputNome.value;
        usuario.apelido = inputApelido.value;
        usuario.idade = inputIdade.value;
        usuario.musicaFavorita = inputMusicaFav.value;
        usuario.corFavorita = inputCorFav.value;
        usuario.comidaFavorita = inputComidaFav.value;
        usuario.ProducaoAVFavorita = inputProducaoAV.value;
        usuario.melhorAmigo = inputAmigo.value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));

        if (usuarios != null) {
            let usuarioExiste = false;

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].apelido == inputApelido.value) {
                    usuarioExiste = true;
                    break;
                }
            }

            if (usuarioExiste) {
                alert('O apelido informado já existe. Tente outro apelido!')
            } else {
                localStorage.setItem('usuario', JSON.stringify(usuario));
                window.location.href = 'cadastroDois.html';
            }
        } else {
            localStorage.setItem('usuario', JSON.stringify(usuario));
            window.location.href = 'cadastroDois.html';
        }

    })

}

if (botaoFinalizar) {

    botaoFinalizar.addEventListener('click', ()=>{
        if (localStorage.hasOwnProperty('usuario')) {
            let usuario = new Object();
            let usuarios = new Array();
            usuario = JSON.parse(localStorage.getItem('usuario'));

            usuario.lugar = inputLugarFav.value;
            usuario.pessoaInspiracao = inputInspiracao.value;
            usuario.coisaLouca = inputCoisaLouca.value;
            usuario.sonhoTer = inputSonho.value;
            usuario.profissaoAlmejada = inputProfissao.value;
            usuario.lugarTrabalho = inputLugarTrabalho.value;
            usuario.algoRefazer = inputAlgoRefazer.value;
            usuario.alguemInsuportavel = inputAlguemInsuportavel.value;

            if (localStorage.hasOwnProperty('usuarios')) {
                usuarios = JSON.parse(localStorage.getItem('usuarios'));
            }

            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            localStorage.removeItem('usuario');
            
            window.location.href = 'historia.html';
        } else {
            alert('Não foi possível preencher o formulário!')
        }
    })
    
}