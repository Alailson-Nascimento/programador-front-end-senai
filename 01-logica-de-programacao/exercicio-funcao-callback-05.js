
// Função de callback
// é a função que você passa como parâmetro para outra função
function processar(a, b, callback) {
     return callback(a, b);
}

function validaNumeros(a, b) {
  if (typeof a != "number" || typeof b != "number") {
  
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
console.log(processar(6, 8, soma))   
console.log(processar(10, 3, subtrai))  
console.log(processar(4, 5, multiplica)) 
console.log(processar(20, 4, divide)) 

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
try {
    console.log(multiplica("abc", 3))
} catch (erro) {
    console.log("erro:", erro.message)
}