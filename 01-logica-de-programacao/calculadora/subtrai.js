import { validaNumeros } from "./validaNumeros.js";
export function subtrair(a, b) {
  validaNumeros(a, b);
  return a - b;
}