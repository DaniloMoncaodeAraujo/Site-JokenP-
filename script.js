const resultado = document.querySelector('.result')
const minhaPontuação = document.querySelector('.span1')
const alexaPontuação = document.querySelector('.span2')

const GAME_OPTIONS = {
   PEDRA: 'pedra',
   PAPEL: 'papel',
   TESOURA: 'tesoura'
}
//Minha jogada!
const playHuman = (humanChoice) => {
   const guardarResultAlexa = playMachine();
   playthegame(humanChoice, guardarResultAlexa)
   ultimaJogadaAlexa(guardarResultAlexa)
}


//jogada da Alexa!
const playMachine = () => {
   const choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
   const randomNumber = Math.floor(Math.random() * 3)

   return choices[randomNumber]
}

//resultado, de quem ganhou, empatou ou perdeu!
const playthegame = (human, machine) => {

   if (human === machine) {
      setTimeout(function () {
         resultado.innerHTML = 'Deu Empate😐!'
         resultado.style.color = '#A9A9A9'
      }, 150);

   } else if ((human == GAME_OPTIONS.PEDRA && machine == GAME_OPTIONS.TESOURA) ||
      (human == GAME_OPTIONS.TESOURA && machine == GAME_OPTIONS.PAPEL) ||
      (human == GAME_OPTIONS.PAPEL && machine == GAME_OPTIONS.PEDRA)) {
      setTimeout(function () {
         MinhaPontuaçãoNumber++
         MinhaPontuação.innerHTML = MinhaPontuaçãoNumber
         resultado.innerHTML = 'Você Ganhou😎!'
         resultado.style.color = '#0000ff'
      }, 150);

   } else {
      setTimeout(function () {
         AlexaPontuaçãoNumber++
         alexaPontuação.innerHTML = AlexaPontuaçãoNumber
         resultado.innerHTML = 'Você Perdeu😢!'
         resultado.style.color = '#FF0000'
      }, 150);
   }

}


//Mostrar minha última jogada na tela, para melhor entender o que esta acontecendo!
const buttonpedra = document.querySelector('#pedra')
const buttonpapel = document.querySelector('#papel')
const buttontesoura = document.querySelector('#tesoura')

const suaJogada = document.querySelector('.suaJogada')

buttonpedra.addEventListener("click", function () {
   suaJogada.innerHTML = '&#x1F44A'
});

buttonpapel.addEventListener("click", function () {
   suaJogada.innerHTML = '&#x1f590'
});

buttontesoura.addEventListener("click", function () {
   suaJogada.innerHTML = '&#x270c'
});

//Mostrar última jogada da Alexa na tela, para melhor entender o que esta acontecendo!
const ultimaJogadaAlexa = (guardarResultAlexa) => {
   const alexaJogada = document.querySelector('.alexaJogada')

   if (guardarResultAlexa == GAME_OPTIONS.PEDRA) {
      alexaJogada.innerHTML = '&#x1F44A'
   } else if (guardarResultAlexa == GAME_OPTIONS.PAPEL) {
      alexaJogada.innerHTML = '&#x1f590'
   } else if (guardarResultAlexa == GAME_OPTIONS.TESOURA) {
      alexaJogada.innerHTML = '&#x270c'
   }
}

//Pontuação
const MinhaPontuação = document.querySelector('.span1')
const AlexaPontuação = document.querySelector('.span2')

let MinhaPontuaçãoNumber = 0;
let AlexaPontuaçãoNumber = 0;