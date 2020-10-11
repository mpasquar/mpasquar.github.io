let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
        //alert('local imagem:'+ minhaImagem.getAttribute('src'));
        let meuSrc = minhaImagem.getAttribute('src');
        if (meuSrc === 'imagens/imagempao.jpg') {
            minhaImagem.setAttribute('src','imagens/imagempaopb.jpg');
        } else {
            minhaImagem.setAttribute('src','imagens/imagempao.jpg');
        }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Fazer pão caseiro é muito bom, ' + meuNome;
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Fazer pão caseiro é muito bom, ' + nomeGuardado;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}