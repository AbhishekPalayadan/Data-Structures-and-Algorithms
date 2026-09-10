// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.size===0;
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     append(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             this.tail.next=node;
//             this.tail=node;
//         }
//         this.size++;
//     }

//     print(){
//         let current=this.head;
//         while(current){
//             console.log(current.value);
//             current=current.next;
//         }
//     }

//     search(value){
//         let current=this.head;

//         while(current){
//             if(value === current.value){
//                 return true;
//             }
//             current=current.next;
//         }
//         return false;
//     }

//     removeFromFront(){
//         if(this.isEmpty())return null;

//         const removed=this.head;

//         this.head=this.head.next;
//         this.size--;

//         if(this.size===0){
//             this.tail=null;
//         }
//         return removed.value;
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null;
//         }

//         if(this.size===1){
//             const removed=this.head.value;

//             this.head=null;
//             this.tail=null;
//             this.size--;

//             return removed;
//         }

//         let current=this.head;
//         while(current !== this.tail){
//             current=this.next;
//         }

//         const removed=this.tail.value;

//         current.next=null;
//         this.tail=current;

//         this.size--;

//         return removed;
//     }
// }

// let list=new LinkedList();

// list.append(40);
// list.append(50);
// list.append(60);
// list.append(70);
// list.prepend(30);

// console.log(list.removeFromEnd())
// console.log(list.removeFromFront())



// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

    
//     append(value){
//         const node=new Node(data);

//         if(this.head===null){
//             this.head=node;
//             this.tail=node;
//         }else{
//             this.tail.next=node;
//             this.tail=node;
//         }
//         this.size++;
//     }


//     prepend(value){
//         const node=new Node(value);
//         if(this.head===null){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }


//     traverse(){
//         let current=this.head;
//         while(current){
//             console.log(current.value);
//             current=current.next;
//         }
//     }


//     insert(index,value){
//         if(index<0 || index>this.size){
//             return false;
//         }

//         if(index===0){
//             this.prepend(value);
//             return true;
//         }

//         if(index === this.size){
//             this.append(value);
//             return true;
//         }

//         const node=new Node(value);

//         let current=this.head;

//         for(let i=0;i<index-1;i++){
//             current=current.next;
//         }

//         node.next=current.next;
//         current.next=node;

//         this.size++;
//     }


// }

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     getSize(){
//         return this.size;
//     }

//     isEmpty(){
//         return this.size===0;
//     }

//     prepend(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     append(value){
//         const node=new Node(value);

//         if(this.isEmpty()){
//             this.head=node;
//             this.tail=node;
//         }else{
//             this.tail.next=node;
//             this.tail=node;
//         }
//         this.size++;
//     }

//     insert(index,value){
//         if(index>this.size || index<0)return false;
//         const node=new Node(value);
//         if(index===0){
//             this.head=node;
//             this.tail=node;
//             this.size++;
//         }
//     }

//     print(){
//         let current=this.head;
//         while(current){
//             console.log(current.value);
//             current=current.next;
//         }
//     }
// }

// const list=new LinkedList();

// list.append(10);
// list.append(20);
// list.append(30);
// list.append(30);
// list.append(60);
// list.append(40);
// list.append(10);

// function insert(list,index,value){
//     const node = new Node(value);
//     if(index<0 || index>list.size){
//         return false;
//     }
//     if(index===0){
//         list.head=node;
//         list.tail=node;
//         list.size++;

//         return true;
//     }

//     if(index===list.size){
//         list.tail.next=node;
//         list.tail=node;
//         list.size++;

//         return true;
//     }

//     let current=list.head;

//     for(let i=0;i<index-1;i++){
//         currnet=current.next;
//     }

//     node.next=current.next;
//     current.next=node;
//     list.size++;

//     return true;
// }

// function deleteFirst(list){
//     if(list.size===0){
//         return null;
//     }
//     let deletedValue=list.head.value;
//     list.head=list.head.next;
    
//     list.size--;

//     if(list.size===0){
//         list.tail=null;
//     }
//     return deletedValue;
// }


// function deleteLastNode(list){
//     if(list.size===0){
//         return null;
//     }

//     if(list.size===1){
//         let deletedValue=list.head.value;

//         list.head=list.head.next;
//         list.size--;

//         if(list.size===0){
//             list.tail=null;
//         }
//         return deletedValue;
//     }

//     let current=list.head;

//     while(current.next != list.tail){
//         current=current.next;
//     }

//     const deletedValue=list.tail.value;

//     current.next=null;
//     list.tail=current
//     list.size--;

//     return deletedValue;
// }


// const array=[1,2,3,4,5,6,7,8,9,10,11];

// function isPrime(num){
//     if(num<2){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }

// function replacePrime(arr){
//     for(let i=0;i<arr.length;i++){
//         if(isPrime(arr[i])){
//             arr[i]=0;
//         }
//     }
//     return arr;
// }

// console.log(replacePrime(array))


// function findDuplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<i;j++){
//             if(arr[i]===arr[j]){
//                 console.log(arr[i]);
//                 break;
//             }
//         }
//     }
// }

// const array=[1,2,3,4,5,6,1,2,3,5];
// findDuplicates(array);



// function removeDuplicates(list){
//     let current=list.head;
//     while(current !== null){
//         let runner=current;
//         while(runner.next !== null){
//             if(current.value === runner.next.value){
//                 runner.next=runner.next.next;
//             }else{
//                 runner=runner.next;
//             }
//         }
//         current=current.next;
//     }
//     return list;
// }
// removeDuplicates(list)
// list.print()


// function findLargest(list){
//     let large=-Infinity;
//     let current=list.head;
//     while(current){
//         if(current.value>large){
//             large=current.value;
//         }
//         current=current.next;
//     }
//     return large;
// }

// console.log(findLargest(list))



// function reverseLinkedList(list){
//     let prev=null;
//     let current=list.head;
//     while(current !== null){
//         let next=current.next;
//         current.next=prev;
//         prev=current;
//         current=next;
//     }
//     return prev;
// }

// const arr=[10,20,30,40,50]
// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         console.log('hello')

//         if(arr[mid]===target){
//             return mid;
//         }

//         if(target>arr[mid]){
//             left=mid+1;
//         }else{
//             right=mid-1;
//         }
//     }
//     return -1;
// }


// const arr=[1,2,3,4,5];

// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]===target){
//             return mid;
//         }

//         if(arr[mid]>target){
//             left=mid+1;
//         }else{
//             right=mid-1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(arr,3))



class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }

    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}

const list=new LinkedList();
list.append(10);
list.append(10);
list.append(20);
list.append(20);
list.append(30);
list.append(20);

function removeDuplicates(list){
    let current=list.head;
    while(current != null){
        let runner=current;
        while(runner.next !== null){
            if(current.value === runner.next.value){
                runner.next=runner.next.next;
            }else{
                runner=runner.next;
            }
        }
        current=current.next;
    }
    return list;
}

removeDuplicates(list);

list.print()



function reverseLinkedList(list){
    let prev=null;
    let current=list.head;
    while(current !== null){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
}

let prev=reverseLinkedList(list);

console.log(prev)