alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto eh menor que ${chute}`);
        }else{
            alert(`O numero secreto eh maior que ${chute}`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);