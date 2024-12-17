function generarSerieFibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoFibonacci").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let a = 0, b = 1, resultado = "0";
    for (let i = 1; i < n; i++) {
        resultado += `, ${b}`;
        [a, b] = [b, a + b];
    }
    document.getElementById("resultadoFibonacci").textContent = resultado;
}

function generarSerieBinaria() {
    const n = parseInt(document.getElementById("binariaInput").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoBinaria").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let resultado = "0, 1";
    let num = 1;
    for (let i = 1; i < n; i++) {
        num = (num === 0) ? 1 : 0;
        resultado += `, ${num}`;
    }
    document.getElementById("resultadoBinaria").textContent = resultado;
}

function calcularFactoriales() {
    const n = parseInt(document.getElementById("factorialInput").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoFactoriales").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let suma = 0, resultado = "";
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        suma += factorial;
        resultado += `${i}! = ${factorial}, `;
    }
    document.getElementById("resultadoFactoriales").textContent = `${resultado} Suma: ${suma}`;
}

function rotarIzquierda() {
    let num = document.getElementById("numeroRotar").value;
    if (num.length === 0) {
        document.getElementById("resultadoRotar").textContent = "Por favor, ingrese un número.";
        return;
    }
    num = num.slice(1) + num[0];
    document.getElementById("resultadoRotar").textContent = `Número rotado a la izquierda: ${num}`;
}

function rotarDerecha() {
    let num = document.getElementById("numeroRotar").value;
    if (num.length === 0) {
        document.getElementById("resultadoRotar").textContent = "Por favor, ingrese un número.";
        return;
    }
    num = num[num.length - 1] + num.slice(0, -1);
    document.getElementById("resultadoRotar").textContent = `Número rotado a la derecha: ${num}`;
}

function rotarPares() {
    let num = document.getElementById("numeroPares").value;
    if (num.length < 6) {
        document.getElementById("resultadoPares").textContent = "Por favor, ingrese un número de al menos 6 dígitos.";
        return;
    }
    let pares = num.split("").filter(digit => digit % 2 === 0);
    if (pares.length === 0) {
        document.getElementById("resultadoPares").textContent = "No se encontraron dígitos pares.";
        return;
    }
    pares.unshift(pares.pop());
    let result = num.split("");
    let i = 0;
    for (let j = 0; j < result.length; j++) {
        if (result[j] % 2 === 0) {
            result[j] = pares[i++];
        }
    }
    document.getElementById("resultadoPares").textContent = `Número rotado: ${result.join("")}`;
}

function mostrarRepetidos() {
    let num = document.getElementById("numeroRepetidos").value;
    if (num < 100) {
        document.getElementById("resultadoRepetidos").textContent = "Por favor, ingrese un número mayor a 100.";
        return;
    }
    let digitos = num.split("");
    let repetidos = [...new Set(digitos.filter((digit, index) => digitos.indexOf(digit) !== index))];
    if (repetidos.length === 0) {
        document.getElementById("resultadoRepetidos").textContent = "No hay dígitos repetidos.";
        return;
    }
    document.getElementById("resultadoRepetidos").textContent = `Dígitos repetidos: ${repetidos.join(", ")}`;
}

function esCapicua() {
    let num = document.getElementById("numeroCapicua").value;
    let numRevertido = num.split("").reverse().join("");
    if (num === numRevertido) {
        document.getElementById("resultadoCapicua").textContent = "El número es capicúa.";
    } else {
        document.getElementById("resultadoCapicua").textContent = "El número no es capicúa.";
    }
}

function esPrimor() {
    let num = parseInt(document.getElementById("numeroPrimo").value);
    if (isNaN(num) || num <= 1) {
        document.getElementById("resultadoPrimo").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.getElementById("resultadoPrimo").textContent = esPrimo ? "El número es primo." : "El número no es primo.";
}
function esPrimo(num) {
    if (num <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) return false;  
    }
    return true; 
}

function generarPrimos() {
    let n = parseInt(document.getElementById("primosHasta").value);  
    if (isNaN(n) || n <= 1) {  
        document.getElementById("resultadoPrimos").textContent = "Por favor, ingrese un número válido.";
        return;
    }

    let primos = [];  
    for (let i = 2; i <= n; i++) {  
        if (esPrimo(i)) {  
            primos.push(i);  
        }
    }

    document.getElementById("resultadoPrimos").textContent = `Números primos hasta ${n}: ${primos.join(", ")}`;
}

function generarVectorFibonacci() {
    let n = parseInt(document.getElementById("vectorFibonacci").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoVectorFibonacci").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let a = 0, b = 1, resultado = [0];
    for (let i = 1; i < n; i++) {
        resultado.push(b);
        [a, b] = [b, a + b];
    }
    document.getElementById("resultadoVectorFibonacci").textContent = `Serie Fibonacci hasta ${n} términos: ${resultado.join(", ")}`;
}

function generarSerieExponencial() {
    let n = parseInt(document.getElementById("exponencialInput").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoExponencial").textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let resultado = [];
    for (let i = 0; i < n; i++) {
        resultado.push(Math.pow(2, i));
    }
    document.getElementById("resultadoExponencial").textContent = `Serie Exponencial: ${resultado.join(", ")}`;
}

function esPalindromo() {
    let palabra = document.getElementById("palabraPalindromo").value;
    let palabraRevertida = palabra.split("").reverse().join("");
    if (palabra === palabraRevertida) {
        document.getElementById("resultadoPalindromo").textContent = "La palabra es palíndromo.";
    } else {
        document.getElementById("resultadoPalindromo").textContent = "La palabra no es palíndromo.";
    }
}

function invertirCadena() {
    let cadena = document.getElementById("cadenaInvertir").value;
    let cadenaInvertida = cadena.split("").reverse().join("");
    document.getElementById("resultadoInvertir").textContent = `Cadena invertida: ${cadenaInvertida}`;
}

function calcular() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "^":
            resultado = Math.pow(num1, num2);
            break;
        case "!":
            resultado = factorial(num1);
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultadoCalculadora").textContent = `Resultado: ${resultado}`;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function convertirARomanos() {
    let num = parseInt(document.getElementById("numeroRomano").value);
    let romano = "";
    const valores = [
        { num: 1000, simbolo: "M" },
        { num: 900, simbolo: "CM" },
        { num: 500, simbolo: "D" },
        { num: 400, simbolo: "CD" },
        { num: 100, simbolo: "C" },
        { num: 90, simbolo: "XC" },
        { num: 50, simbolo: "L" },
        { num: 40, simbolo: "XL" },
        { num: 10, simbolo: "X" },
        { num: 9, simbolo: "IX" },
        { num: 5, simbolo: "V" },
        { num: 4, simbolo: "IV" },
        { num: 1, simbolo: "I" }
    ];

    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i].num) {
            romano += valores[i].simbolo;
            num -= valores[i].num;
        }
    }

    document.getElementById("resultadoRomanos").textContent = `Número Romano: ${romano}`;
}

function generarMatrizPascal() {
    let filas = parseInt(document.getElementById("filasPascal").value);
    let resultado = "";
    let matriz = [[1]];

    for (let i = 1; i < filas; i++) {
        let fila = [1];
        for (let j = 1; j < i; j++) {
            fila.push(matriz[i - 1][j - 1] + matriz[i - 1][j]);
        }
        fila.push(1);
        matriz.push(fila);
    }

    matriz.forEach(fila => {
        resultado += fila.join(" ") + "<br/>";
    });

    document.getElementById("resultadoPascal").innerHTML = resultado;
}
