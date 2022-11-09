let listaCompra = ["pan", "leche", "aguacates", "cafe", "zumo"]
listaCompra.push("Aceite de Girasol")

const listaPeliculas = [
    {titulo: "El Padrino", director: "F.Ford Coppola" , fecha: 1972},
    {titulo: "Pulp Fiction", director: "Q.Tarantino", fecha: 1994},
    {titulo: "Blade Runner", director: "R.Scott", fecha: 1982}
]
const peliculasNuevas = listaPeliculas.filter(pelicula => pelicula.fecha > 2010)
const listaDirectores = listaPeliculas.map(pelicula => pelicula.director)
const listaTitulos = listaPeliculas.map(pelicula => pelicula.titulo)
const listaConcat = listaDirectores.concat(listaTitulos)
const listaPropag = [...listaDirectores, ...listaTitulos]

console.log(listaPropag)