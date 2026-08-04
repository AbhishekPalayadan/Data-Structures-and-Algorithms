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
