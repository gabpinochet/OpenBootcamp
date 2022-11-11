const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


function masDiez(valor) {
    if (typeof valor === "number"){
        return valor+10
    }
    throw new Error("El valor debe ser de tipo numéro")
}


try{
    const nuevoValor = masDiez("11")
    console.log(nuevoValor)
} catch(e) {
    logger.error(`${e}`)
}