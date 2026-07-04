import { validaNumeros } from "./validaNumeros.js";
export function dividir(a, b) {
  validaNumeros(a, b);
  if (b == 0) {
    throw new Error("nao dividi por zero");
  }
  return a / b;
}
