const Primo = require("./Primo")

describe("esPrimo", () => {
  test("devuelve true para un número primo", () => {
    const numero = 7;
    const expectedResult = true;
    expect(Primo(numero)).toEqual(expectedResult);
  });

  test("devuelve false para un número no primo", () => {
    const numero = 8;
    const expectedResult = false;
    expect(Primo(numero)).toEqual(expectedResult);
  });

  test("no considera 1 como primo", () => {
    const numero = 1;
    const expectedResult = false;
    expect(Primo(numero)).toEqual(expectedResult);
  });
});