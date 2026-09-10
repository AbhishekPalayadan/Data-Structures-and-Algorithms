class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }

    push(element){
        const node=new Node(element);

        node.next=this.head;
        this.head=node;
        this.size++;
    }

    pop(){
        const removed=this.head.value;
        this.head=this.head.next;
        this.size--;
        return removed;
    }

    isEmpty(){
        return this.size===0;
    }

    size(){
        return this.size;
    }

    display(){
        let current=this.head;

        while(current){
            console.log(current.value);
            current=current.next;
        }
    }

}


const stack=new Stack();

stack.push(4)
stack.push(5)
stack.push(7)
stack.push(8)
stack.pop()

stack.display()