const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function estaOrdenadoAscendente(vector) {
    for (let i = 0; i < vector.length - 1; i++) {
        if (vector[i] > vector[i + 1]) {
            return false;
        }
    }
    return true;
}

function mezclarVectores(vector1, vector2) {
    let resultado = [];
    let i = 0, j = 0;

    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] < vector2[j]) {
            resultado.push(vector1[i]);
            i++;
        } else if (vector1[i] > vector2[j]) {
            resultado.push(vector2[j]);
            j++;
        } else {
            resultado.push(vector1[i]);
            i++;
            j++;
        }
    }

    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }

    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }

    return resultado;
}

function main() {
    const vector1 = [];
    const vector2 = [];

    console.log("Ingrese los elementos del primer vector ordenados ascendentemente:");

    rl.question("Elemento 1: ", (input) => {
        vector1.push(parseInt(input));
        leerVector(vector1, 2);
    });

    function leerVector(vector, index) {
        if (index <= 5) {
            rl.question(`Elemento ${index}: `, (input) => {
                const num = parseInt(input);

                if (num >= vector[vector.length - 1]) {
                    vector.push(num);
                    leerVector(vector, index + 1);
                } else {
                    console.log("Error: Ingrese un número mayor o igual al último número ingresado.");
                    leerVector(vector, index);
                }
            });
        } else {
            if (estaOrdenadoAscendente(vector)) {
                console.log("Primer vector ingresado:", vector);
                console.log("Ingrese los elementos del segundo vector ordenados ascendentemente:");

                rl.question("Elemento 1: ", (input) => {
                    vector2.push(parseInt(input));
                    leerSegundoVector(vector2, 2);
                });
            } else {
                console.log("Error: El primer vector no está ordenado ascendentemente.");
                rl.close();
            }
        }
    }

    function leerSegundoVector(vector, index) {
        if (index <= 5) {
            rl.question(`Elemento ${index}: `, (input) => {
                const num = parseInt(input);

                if (num >= vector[vector.length - 1]) {
                    vector.push(num);
                    leerSegundoVector(vector, index + 1);
                } else {
                    console.log("Error: Ingrese un número mayor o igual al último número ingresado.");
                    leerSegundoVector(vector, index);
                }
            });
        } else {
            if (estaOrdenadoAscendente(vector)) {
                console.log("Segundo vector ingresado:", vector);
                const resultado = mezclarVectores(vector1, vector2);
                console.log("Lista ordenada de la mezcla de los dos vectores:", resultado);
                rl.close();
            } else {
                console.log("Error: El segundo vector no está ordenado ascendentemente.");
                rl.close();
            }
        }
    }
}

main();
