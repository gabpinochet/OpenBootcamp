let str_name = "  Gabriel   "
let str_lastname = "  Pinochet   "

let estudiante = str_name.concat(" ", str_lastname)
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let str_number = estudiante.length
let first_letter = estudiante.trim()[0]
let last_letter = estudiante.trim()[estudiante.trim().length - 1]
let str_trim = estudiante.trim()
let str_includes = estudiante.includes(str_name)