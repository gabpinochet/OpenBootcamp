let datosPersonales = {
    nombre: "Gabriel",
    apellido: "Pinochet",
    edad: 31,
    altura: 172,
    eresDesarrollador: true
}

let datosAmigo1= {
    nombre: "Lucas",
    apellido: "Fernández",
    edad: 29,
    altura: 170,
    eresDesarrollador: false
}

let datosAmigo2= {
    nombre: "Alejandro",
    apellido: "Mokka",
    edad: 35,
    altura: 171,
    eresDesarrollador: true
}

let varEdad = datosPersonales.edad
let listaDatos = [datosPersonales, datosAmigo1, datosAmigo2]
let listaOrdenada = listaDatos.sort((a, b) => b.edad - a.edad)

console.log(listaDatos)