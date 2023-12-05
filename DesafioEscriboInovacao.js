// Função que recebe um número inteiro positivo e retorna o somatório de todos os valores inteiros divisíveis por 3 ou 5
function sumNumbers(number) {

    let sum = 0;
    // Verificar se o número é divisível por 3 ou 5
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    // Retornar o valor da somatória
    return sum;
}

// Testando a função
console.log(sumNumbers(11));