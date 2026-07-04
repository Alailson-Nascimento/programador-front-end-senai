export function validaNumeros(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    
    throw new Error("os valores precisam ser numeros");
  }
}
