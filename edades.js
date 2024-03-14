const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validarEdad(edad) {
    return edad >= 1 && edad <= 120;
}

function calcularEdades(edades) {
    let menoresEdad = 0;
    let mayoresEdad = 0;
    let adultosMayores = 0;
    let edadMasBaja = Infinity;
    let edadMasAlta = -Infinity;
    let sumaEdades = 0;

    for (let i = 0; i < edades.length; i++) {
        const edad = edades[i];
        sumaEdades += edad;

        if (edad < 18) {
            menoresEdad++;
        } else {
            mayoresEdad++;
            if (edad >= 60) {
                adultosMayores++;
            }
        }

        if (edad < edadMasBaja) {
            edadMasBaja = edad;
        }

        if (edad > edadMasAlta) {
            edadMasAlta = edad;
        }
    }

    const promedioEdades = sumaEdades / edades.length;

    return {
        menoresEdad,
        mayoresEdad,
        adultosMayores,
        edadMasBaja,
        edadMasAlta,
        promedioEdades
    };
}

function main() {
    const edades = [];
    let contador = 0;

    console.log("Ingrese las edades de las 10 personas:");

    function ingresarEdad() {
        rl.question(`Edad de la persona ${contador + 1}: `, (input) => {
            const edad = parseInt(input);

            if (validarEdad(edad)) {
                edades.push(edad);
                contador++;

                if (contador === 10) {
                    rl.close();
                    const estadisticas = calcularEdades(edades);
                    mostrarEstadisticas(estadisticas);
                } else {
                    ingresarEdad();
                }
            } else {
                console.log("Edad no válida. Ingrese una edad entre 1 y 120 años.");
                ingresarEdad();
            }
        });
    }

    ingresarEdad();
}

function mostrarEstadisticas(estadisticas) {
    console.log("\nCantidad de personas menores de edad:", estadisticas.menoresEdad);
    console.log("Cantidad de personas mayores de edad:", estadisticas.mayoresEdad);
    console.log("Cantidad de adultos mayores:", estadisticas.adultosMayores);
    console.log("Edad más baja:", estadisticas.edadMasBaja);
    console.log("Edad más alta:", estadisticas.edadMasAlta);
    console.log("Promedio de edades:", estadisticas.promedioEdades);
}

main();
