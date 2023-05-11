import { suma, multiplicar } from "./controller.js";
import chalk from 'chalk';

console.log(chalk.green(multiplicar(suma(1, 2), suma(4, 5))))