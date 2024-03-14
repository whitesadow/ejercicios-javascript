function calcularCuadrado(lado) {
    const area = lado * lado;
    const perimetro = lado * 4;
    return { area, perimetro };
}

function calcularRectangulo(base, altura) {
    const area = base * altura;
    const perimetro = 2 * (base + altura);
    return { area, perimetro };
}

function calcularTriangulo(base, altura) {
    const area = (base * altura) / 2;
    const perimetro = base + altura + Math.sqrt((base ** 2) + (altura ** 2));
    return { area, perimetro };
}

function calcularCirculo(radio) {
    const area = Math.PI * radio ** 2;
    const perimetro = 2 * Math.PI * radio;
    return { area, perimetro };
}

// ejemplos de uso 
const cuadrado = calcularCuadrado(5);
console.log("Área del cuadrado:", cuadrado.area, "Perímetro:", cuadrado.perimetro);

const rectangulo = calcularRectangulo(4, 6);
console.log("Área del reactangulo:", rectangulo.area, "Perímetro:", rectangulo.perimetro);

const triangulo = calcularTriangulo(3, 4);
console.log("Area del triangulo:", triangulo.area, "Perímetro:", triangulo.perimetro);

const circulo = calcularCirculo(7);
console.log("Area del circul:", circulo.area, "Perímetro:", circulo.perimetro);
