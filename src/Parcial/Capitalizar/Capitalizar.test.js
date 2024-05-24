const capitalizar = require("./Capitalizar");

describe("capitalizar", () => {
    test("convierte una cadena a título", () => {
      expect(capitalizar("hola mundo")).toBe("Hola Mundo");
    });
  
    test("devuelve una cadena vacía para una entrada vacía", () => {
      expect(capitalizar("")).toBe("");
    });
  
    test("no cambia una cadena ya en título", () => {
      expect(capitalizar("Hola Mundo")).toBe("Hola Mundo");
    });
  });