const fechaHoy = new Date()
const fechaNacimiento = new Date(1991, 6, 3)
const masTarde = fechaHoy > fechaNacimiento
const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const añoNacimiento = fechaNacimiento.getFullYear()


console.log(añoNacimiento)