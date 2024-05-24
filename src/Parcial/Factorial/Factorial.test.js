const factorial = require("./Factorial");
describe("factorial", () => {
  test("calcula el factorial de un número correctamente", () => {
    const resultado = factorial(5);
    const expectedResult = 120;
    expect(resultado).toEqual(expectedResult);
  });

  test("lanza un error cuando el argumento no es un número", () => {
    const arg = "hola";
    const expectedError = new Error("El argumento debe ser un número entero");
    expect(() => factorial(arg)).toThrow(expectedError);
  });

  test("lanza un error cuando el argumento es negativo", () => {
    const arg = -5;
    const expectedError = new Error("El argumento debe ser un número entero positivo o cero");
    expect(() => factorial(arg)).toThrow(expectedError);
  });

  test("lanza un error cuando el argumento es mayor a 170", () => {
    const arg = 171;
    const expectedError = new Error("El argumento no puede ser mayor a 170");
    expect(() => factorial(arg)).toThrow(expectedError);
  });
});