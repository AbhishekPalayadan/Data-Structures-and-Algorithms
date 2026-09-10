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

//check palindrome string

function palindrome(str,left=0,right=str.length-1){
    if(left>=right){
        return true;
    }

    if(str[left]!=str[right]){
        return false;
    }
    return palindrome(str,left+1,right-1);
}

//sum of array elements

function arraySum(arr,index=0){
    if(index===arr.length){
        return 0;
    }
    return arr[index]+arraySum(arr,index+1);
}

//Find maximum element

function max(arr,index=0){
    if(index===arr.length-1){
        return arr[index];
    }
    return Math.max(arr[index],max(arr,index+1));
}
console.log(max([1,2,3,4,5]))