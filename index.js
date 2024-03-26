// Ex: 1

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);

//Ex: 2
function verificarFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  if (b === num) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  }
}

// Exemplo de uso:
console.log(verificarFibonacci(5));
console.log(verificarFibonacci(6));

/* 
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, 128

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, 23
*/

/* 
4)
Para resolver o problema, considerando que as lâmpadas esquentam quando acesas, executei as seguintes etapas:

Primeira visita às salas das lâmpadas:

Liguei o primeiro interruptor por alguns minutos e depois o desliguei.
Em seguida, liguei o segundo interruptor, mantendo o terceiro desligado.
Observação na primeira sala:

Se a lâmpada estiver apagada e levemente quente, ela está conectada ao primeiro interruptor.
Se estiver acesa, pertence ao segundo interruptor.
Se estiver apagada e fria, é do terceiro interruptor.
Observação na segunda sala:

Com base na primeira sala, eliminei algumas possibilidades.
Por exemplo, se a primeira sala estiver conectada ao primeiro interruptor, e a segunda lâmpada estiver acesa, então sei que pertence ao segundo interruptor.
Assim, posso determinar a ligação sem entrar na terceira sala.
Dessa forma posso determinar a ligação de cada interruptor com as lâmpadas em apenas duas visitas às salas,
*/

//Ex: 5
const invertString = (word) => {
  let wordLength = word.length;
  let newWord = "";

  for (let i = 0; i < wordLength; i++) {
    newWord += word[wordLength - i - 1];
  }

  console.log(newWord);
};

invertString("christian");
