function calculo(operacao, num1, num2) {
    return operacao(num1, num2);
}


function iniciarCalculo() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operador = document.querySelector("#operador").value;
    let resultado = document.querySelector("#resultado");

    let operacao = undefined;
    if (operador === "+") {
        operacao = somar;
    } 
    else if (operador === "-") {
        operacao = subtrair;
    } 
    else if (operador === "*") {
        operacao = multiplicar;
    } 
    else if (operador === "/") {
        operacao = dividir;
    } 
    else { 
        return resultado.innerHTML = "Opss... operador inválido, utilize + - * ou /";
    }

    resultado.innerHTML = calculo(operacao, num1, num2);
}

const somar2 = (a, b) => a + b;
const subtrair2 = (a, b) => a - b;
const multiplicar2 = (a, b) => a * b;
const dividir2 = (a, b) => b !== 0 ? a / b : "Erro: divisão por zero";
