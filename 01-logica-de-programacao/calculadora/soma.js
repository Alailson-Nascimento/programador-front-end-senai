import { validaNumeros } from "./validaNumeros.js";
export function somar(a, b) {
    validaNumeros(a, b);
  return a + b;
}