// Linear Search

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
};


// Binary Search

function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(arr[middleIndex]===target){
            return middleIndex;
        }
        if(arr[middleIndex]<target){
            rightIndex=middleIndex-1;
        }else{
            leftIndex=middleIndex+1;
        }
    }
    return -1;
}