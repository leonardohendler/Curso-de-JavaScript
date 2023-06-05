// Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

// A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

// Se o número for positivo e par, retorne "Positivo e Par".

// Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

// Se o número for negativo, retorne "Negativo".

// Se o número for zero, retorne "Neutro".

let num = 2;

if (num % 2 == 0 && num > 0){
    console.log("Positivo e Par!");
}
if (num % 2 !=0 &&  num >0){
    console.log("Positivo e impar!");
}
if ( num <0){
    console.log("Numero é negativo");
}
if ( num ===0){
    console.log("Neutro");
}