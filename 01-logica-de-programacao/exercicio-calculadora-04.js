

// Verifica se os dois valores são números
function validaNumeros(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    // Cria um erro
    throw new Error("os valores precisam ser numeros");
  }
}

function soma(a, b) {
  validaNumeros(a, b);
        return a + b
}

function subtrai(a, b) {
  validaNumeros(a, b);
  return a - b
}

function multiplica(a, b) {
        validaNumeros(a, b);
    return a * b
}

function divide(a, b) {
  validaNumeros(a, b);
  if (b == 0) {
    throw new Error("nao dividi por zero");
  }
  return a / b;
}

  console.log(soma(6, 8));
   console.log(divide(5, 5));
  console.log(subtrai(6, 50));
  console.log(multiplica(10, 8));
try {
  console.log(soma(1, "2"));
} catch (erro) {
    console.log("erro:", erro.message);
}

try {
  console.log(divide(10, 0));
} catch (erro) {
  console.log("erro:", erro.message);
}

try {
  console.log(subtrai("texto", 0))
} catch (erro) {
  console.log("erro:", erro.message);
}
