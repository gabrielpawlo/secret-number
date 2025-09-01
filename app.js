let listaDeNumerosSorteados = [];
let numeroLimite = 40;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){//parametro
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Male', {rate: 1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial(){
    
    exibirTexto('h1', 'Secret number game');
    exibirTexto('p', 'Choose a number betwen 1 and 100');
}

function verificarChute(){//sem parametro
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTexto('h1', 'Correct!');
        let palavraTentativas = tentativas > 1 ? 'tries' : 'try';
        let mensagemTentativas = `Secret number discovered with ${tentativas} ${palavraTentativas}`
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'Secret number less than');
        } else {
            exibirTexto('p', 'Secret number more than');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantiedadeDeElementos = listaDeNumerosSorteados.length;
    if(quantiedadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

mensagemInicial();