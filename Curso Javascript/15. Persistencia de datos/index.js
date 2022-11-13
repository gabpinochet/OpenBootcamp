const nombre = "Gabriel"
const apellido = "Pinochet"
const nombreCompleto = {nombre: nombre, apellido: apellido}

sessionStorage.setItem("Nombre completo", JSON.stringify(nombreCompleto))
localStorage.setItem("Nombre completo", JSON.stringify(nombreCompleto))

let now = new Date();
let time = now.getTime();
let expireTime = time + 1000*120;
now.setTime(expireTime);
document.cookie = "nombreCompleto="+JSON.stringify(nombreCompleto)+";expires=" + now.toUTCString()