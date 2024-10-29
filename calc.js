function calcular() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operador = document.querySelector("#operador").value;
    let resultado = document.querySelector("#resultado");

    if (operador === "+") {
        somar(num1, num2);
    }
    else if (operador === "-") {
        subtrair(num1, num2);
    }
    else if (operador === "*") {
        multiplicar(num1, num2);
    }
    else if (operador === "/") {
        dividir(num1, num2);
    }
    else {
        resultado.innerHTML = "Opss... operador inválido, utilize + - * ou /";
    }
}

const somar = function (num1, num2) {
    resultado.innerHTML = num1 + num2;
}

const subtrair = function (num1, num2) {
    resultado.innerHTML = num1 - num2;
}

const multiplicar = (num1, num2) => resultado.innerHTML = num1 * num2;

const dividir = (num1, num2) => num2 != 0 ? resultado.innerHTML = num1 / num2 : resultado.innerHTML = "Opss... não é possivel fazer divisão por zero meu chapa.";
