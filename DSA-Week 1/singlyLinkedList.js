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



class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

const node=new Node
console.log(node)

function prepend(head,value){
    if(head===null){

    }
}