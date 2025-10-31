
    
    const num1 = document.getElementById("numero1");
    const num2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");

    // Botones

    const btnSuma = document.getElementById("suma");
    const btnResta = document.getElementById("resta");
    const btnMultiplica = document.getElementById("multiplica");
    const btnDivide = document.getElementById("divide");
    const btnExponente = document.getElementById("exponente");
    const btnRaiz = document.getElementById("raiz");

    // Función para obtener los valores de los inputs

    function obtenerValores() {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        return { n1, n2 };
    }

    // Suma

    btnSuma.addEventListener("click", () => {
        const { n1, n2 } = obtenerValores();
        resultado.textContent = n1 + n2;
    });

    // Resta

    btnResta.addEventListener("click", () => {
        const { n1, n2 } = obtenerValores();
        resultado.textContent = n1 - n2;
    });

    // Multiplicación

    btnMultiplica.addEventListener("click", () => {
        const { n1, n2 } = obtenerValores();
        resultado.textContent = n1 * n2;
    });

    // División

    btnDivide.addEventListener("click", () => {
        const { n1, n2 } = obtenerValores();
        if (n2 === 0) {
            resultado.textContent = "Error: División entre 0";
        } else {
            resultado.textContent = n1 / n2;
        }
    });

    // Exponente

    btnExponente.addEventListener("click", () => {
        const { n1, n2 } = obtenerValores();
        resultado.textContent = Math.pow(n1, n2);
    });

    // Raíz cuadrada

    btnRaiz.addEventListener("click", () => {
        const { n1 } = obtenerValores(); 
        if (n1 < 0) {
            resultado.textContent = "Error: número negativo";
        } else {
            resultado.textContent = Math.sqrt(n1);
        }
    });