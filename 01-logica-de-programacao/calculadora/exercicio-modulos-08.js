  
import { somar } from "./soma.js";
import { subtrair } from "./subtrai.js";
 import { multiplicar } from "./multiplica.js";
import { dividir } from "./divide.js";
  
  console.log(somar(6, 8));
   console.log(dividir(5, 5));
  console.log(subtrair(6, 50));
  console.log(multiplicar(10, 8));
try {
  console.log(somar(1, "2"));
} catch (erro) {
    console.log("erro:", erro.message);
}

try {
  console.log(dividir(10, 0));
} catch (erro) {
  console.log("erro:", erro.message);
}

try {
  console.log(subtrair("texto", 0))
} catch (erro) {
  console.log("erro:", erro.message);
}
try {
    console.log(multiplicar("abc", 3))
} catch (erro) {
    console.log("erro:", erro.message)
}
