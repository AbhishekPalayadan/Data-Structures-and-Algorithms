//print numbers from 1 to n

function printNNumbers(n,current=1){
    if(current>n){
        return;
    }
    console.log(current);
    printNNumbers(n,current+1);
}

//print numbers from n to 1

function printReverse(n){
    if(n<1){
        return;
    }
    console.log(n);
    printReverse(n-1);
}

//sum of first n numbers

function sumOfNNumbers(n){
    if(n<1){
        return 0;
    }
    return n+sumOfNNumbers(n-1);
}

//Factorial of numbers

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*(factorial(n-1));
}

//Power of number

function power(base,exponent){
    if(exponent<=0){
        return 1;
    }
    return base*power(base,exponent-1);
}

//Reverse string

function reverseString(str){
    if(str.length===0){
        return "";
    }
    return reverseString(str.slice(1))+str[0];
}