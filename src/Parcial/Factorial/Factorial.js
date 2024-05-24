function factorial(n) {
  if (typeof n !== "number") {
    throw new Error("El argumento debe ser un número entero");
  }
  if (n < 0) {
    throw new Error("El argumento debe ser un número entero positivo o cero");
  }
  if (n > 170) {
    throw new Error("El argumento no puede ser mayor a 170");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
module.exports = factorial;
