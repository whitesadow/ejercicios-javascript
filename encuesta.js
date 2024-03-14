const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Persona {
    constructor(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correoElectronico = correoElectronico;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = [];
    }

    agregarCancion(cancion) {
        if (this.cancionesFavoritas.length < 3) {
            this.cancionesFavoritas.push(cancion);
            console.log(`Canción "${cancion}" agregada a la lista de canciones favoritas de ${this.nombre}.`);
        } else {
            console.log(`${this.nombre} ya tiene 3 canciones favoritas registradas.`);
        }
    }

    mostrarInformacionPersonal() {
        console.log("Información personal:");
        console.log("Nombre:", this.nombre);
        console.log("Cédula:", this.cedula);
        console.log("Fecha de Nacimiento:", this.fechaNacimiento);
        console.log("Correo Electrónico:", this.correoElectronico);
        console.log("Ciudad de Residencia:", this.ciudadResidencia);
        console.log("Ciudad de Origen:", this.ciudadOrigen);
        console.log("Canciones Favoritas;", this.cancionesFavoritas);
        if (this.cancionesFavoritas.length === 0) {
            console.log("No se han registrado canciones favoritas.");
        } else {
            this.cancionesFavoritas.forEach((cancion, index) => {
                console.log(`${index + 1}. ${cancion}`);
            });
        }
    }
}

const personas = [];

function agregarPersona() {
    rl.question("Nombre: ", (nombre) => {
        rl.question("Cédula: ", (cedula) => {
            rl.question("Fecha de Nacimiento: ", (fechaNacimiento) => {
                rl.question("Correo Electrónico: ", (correoElectronico) => {
                    rl.question("Ciudad de Residencia: ", (ciudadResidencia) => {
                        rl.question("Ciudad de Origen: ", (ciudadOrigen) => {
                            rl.question("Cancion Favorita: ", (cancionFavorita) => {
                            const persona = new Persona(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen);
                            personas.push(persona);
                            console.log("Persona agregada correctamente.");
                            mostrarMenu();
                            });
                        });
                    });
                });
            });
        });
    });
}

function mostrarInformacionPersonal() {
    rl.question("Ingrese la posición de la persona en el vector: ", (posicion) => {
        const index = parseInt(posicion) - 1;
        if (index >= 0 && index < personas.length) {
            const persona = personas[index];
            persona.mostrarInformacionPersonal();
        } else {
            console.log("Posición inválida.");
        }
        mostrarMenu();
    });
}

function mostrarMenu() {
    console.log("\nMenú:");
    console.log("a. Agregar una persona");
    console.log("b. Mostrar la información personal de una persona particular");
    console.log("x. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case 'a':
                agregarPersona();
                break;
            case 'b':
                mostrarInformacionPersonal();
                break;
            case 'x':
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();
