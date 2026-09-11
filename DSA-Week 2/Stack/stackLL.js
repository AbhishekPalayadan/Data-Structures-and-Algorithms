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

    push(value){
        const node=new Node(value);

        node.next=this.head;
        this.head=node;
        this.size++;
    }

    pop(){
        if(this.head=== null){
            return "Stack is empty";
        }
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

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.display()