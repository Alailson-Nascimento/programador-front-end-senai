import { validaNumeros } from "./validaNumeros.js";
export function multiplicar(a, b) {
  validaNumeros(a, b);
  return a * b;
}