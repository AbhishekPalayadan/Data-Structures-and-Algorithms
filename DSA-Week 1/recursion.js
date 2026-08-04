//print numbers from 1 to n;
function printNNumbers(n,current=1){
    if(current>n){
        return;
    }
    console.log(current);
    printNNumbers(n,current+1);
}
printNNumbers(6)