// 1 inicialização
// 2 condição
// 3 Incremento / Decremento

// num1 começa em 1, enquanto for menor ou igual a 9, aumenta 1
for (let num1 = 1; num1 <= 9; num1++) {

         // num2 começa em 1, enquanto for menor ou igual a 9, aumenta 1
        for(num2 = 1; num2 <= 9; num2++) {

            // Multiplica num1 x num2 e guarda o resultado
            let resutadoTabuada = num1 * num2;
             // ${} pega o valor da variável e coloca no texto
    console.log(`${num1} x ${num2} = ${resutadoTabuada} `);

        }
}