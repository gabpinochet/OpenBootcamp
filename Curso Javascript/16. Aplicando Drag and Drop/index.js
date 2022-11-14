const parrafos = document.querySelectorAll(".parrafos")
const secciones = document.querySelectorAll(".secciones")
const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", event => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(papelera => {
    papelera.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "remove"
    })
    papelera.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        papelera.appendChild(parrafo)
        papelera.removeChild(parrafo)
    })
})