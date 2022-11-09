function siempreTrue() {
    return true;
}

function miAsinc() {
    console.log("Hola soy una promesa")
}

const promesa = setTimeout(miAsinc, 5000);

function* indicePar() {
    let id = 0;
    while(true) {
        id++
        yield id*2
        if ( id === 10 ) {
            return
        }
    }
}

const gen = indicePar()