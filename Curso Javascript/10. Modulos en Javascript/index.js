import {suma, multiplica} from "./controller.js"
import chalk from 'chalk';

const suma1 = suma(1,2)
const suma2 = suma(4,5)
const multiplicacion = multiplica(suma1,suma2)

console.log(chalk.green(multiplicacion))