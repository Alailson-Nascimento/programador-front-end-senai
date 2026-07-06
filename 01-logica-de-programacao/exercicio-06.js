    function estatisticas(...numeros) {
  if (numeros.length == 0) {
    return "Nenhum número foi passado!";
  }

    let maior = numeros[1];

  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }

  let menor = numeros[1];

        for (let numero of numeros) {
    if (numero < menor) {
      menor = numero;
    }
  }

  let soma;

  for (let numero of numeros) {
    soma = soma + numero;
  }

  let media = soma / numeros.length;

  return {
    maiorValor: maior,
    menorValor: menor,
    media: media,
    somaTotal: soma,
  };
}

console.log(estatisticas(10, 20, 30));
 console.log(estatisticas(5, 15, 25, 35, 45));
 console.log(estatisticas(100));
console.log(estatisticas(12, 5, 8, 20, 3, 15, 7));
