function fibonacci(num) {
    let array = []
    for ( i=0 ; i<num ; i++ ){
        if (i==0) {
            array[i] = 1
        } else if (i==1) {
            array[i] = 1
        } else {
        array[i] = array[i-1] + array[i-2]
        }
    }
    return array
}

const arrayFibonacci = fibonacci(6)

console.log(arrayFibonacci)