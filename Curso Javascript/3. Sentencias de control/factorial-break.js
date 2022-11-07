var factorial = 10;
var i = factorial - 1;

while (i > 0){
    factorial = factorial * i;
    i--;
    if (i == 1){
        console.log("Aquí termina el bucle")
        break;
    }
}

console.log(factorial);