class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    enqueue(element){
        const node=new Node(element);

        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }

        const value=this.head.value;

        this.head=this.head.next;
        this.size--;

        if(this.isEmpty()){
            this.tail=null;
        }

        return value;
    }

    display(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}


const queue=new QueueLinkedList();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();

queue.display()
