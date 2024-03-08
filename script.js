/* QUESTÃO 1 */

/*1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);


/* QUESTÃO 2 */

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function verificaSequenciaFibonacci(numero) {
    // Verifica se o número é 0 ou 1, pois eles são parte da sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        return true;
    }

    let anterior = 0;
    let atual = 1;
    let proximo;

    while (atual <= numero) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;

        if (atual === numero) {
            return true;
        }
    }

    return false;
}


const numeroInformado = 21;
if (verificaSequenciaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}


/*QUESTÃO 3*/
// 3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, _9_

// b) 2, 4, 8, 16, 32, 64, 128

// c) 0, 1, 4, 9, 16, 25, 36,49

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 20



/* QUESTÃO 4 */


// Na primeira ida, ligue um interruptor e mantenha os outros dois desligados por alguns minutos. Então, desligue o interruptor que você ligou e ligue um dos outros dois interruptores. Deixe os interruptores ligados por um tempo.

// Agora, entre na sala das lâmpadas. As possibilidades são:

// Se a lâmpada estiver acesa, então o interruptor que você ligou na primeira vez está conectado a essa lâmpada.
// Se a lâmpada estiver desligada e estiver fria, então o interruptor que você não tocou está conectado a essa lâmpada.
// Se a lâmpada estiver desligada, mas ainda estiver quente, então o interruptor que você ligou na segunda vez está conectado a essa lâmpada.


/* QUESTÃO 5 */
function inverteString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}


const stringOriginal = "Olá, mundo!";
const stringInvertida = inverteString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
