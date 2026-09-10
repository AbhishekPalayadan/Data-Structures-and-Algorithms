// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     prepend(value){
//         const node=new Node(value);

//         if(this.isEmpty()){
//             this.head=this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head.prev=node;
//             this.head=node;
//         }
//         this.size++;
//     }
// }


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     prepend(value){
//         const node=new Node(value);

//         if(this.head===null){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head.prev=node;
//             this.head=node;

//         }
//         this.size++;
//     }

//     append(value){
//         const node=new Node(value);

//         if(this.head===null){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.prev=this.tail;
//             this.tail.next=node;
//             this.tail=node;
//         }
//         this.size++;
//     }

// }



const obj={
    name:"abhishek"
}

const arr1=[7,8,9,10]

const arr=[1,2,3,4,5,obj,arr1]

console.log(arr)