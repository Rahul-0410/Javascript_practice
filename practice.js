 // adding of two numbers 
function adding(num1,num2) {
    console.log(num1+num2)
}
adding(5,5)

// multiplication of number 
function multiple(num3,num4){
    console.log(num3*num4)
}
multiple(5,4)

// factorial of a number 
function numFactorial(n) {
    if (n<0) {
        return "ERROR!"
    }
    if (n==0 ) {
        return 1
    }
    else {
        let factorial=1
        while (n>1) {
            factorial= factorial*n
            n=n-1
            
        }
        return factorial
    }
}
console.log(numFactorial(5))
