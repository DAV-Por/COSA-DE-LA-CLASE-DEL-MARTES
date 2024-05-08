const sub = require("./sub")
describe (" TESTS DE SUB", () => {
    test ("la funcuion debe retonar la resta de dos numeros naturales", () => {
        const resultado = sub (2, 3);
        expect(resultado).toBe(1);
    });
    
    test ("Los numeros deben ser numeros", () => {
        const resultado = sub ("2",3);
        const error = "Los argumentos deben ser numeros enteros"
        expect (resultado).toBe(error);
    });
    
    test ("Si la resta es mayor al limete", () => {
        const resultado = sub (200, 100);
        const resultadoLimitado = "La resta sobrepaso los limites";
        expect (resultado).toBe(resultadoLimitado);
    });
});
