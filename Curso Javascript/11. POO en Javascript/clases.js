class Estudiante {
    nombre
    asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nombre){
        this.nombre = nombre
    }

    obtenDatos() {
        let datos = { nombre: this.nombre, asignaturas: this.asignaturas}
        return datos
    }
}

const nuevoEstudiante = new Estudiante("Gabriel")

console.log(nuevoEstudiante.obtenDatos())