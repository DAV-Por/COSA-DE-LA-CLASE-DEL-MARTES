const sub = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "Los argumentos deben ser numeros enteros";
    }
    const resultado = Math.abs(num1 - num2);
    return resultado >= 100 ? "La resta sobrepaso los limites": resultado;
};

module.exports = sub;