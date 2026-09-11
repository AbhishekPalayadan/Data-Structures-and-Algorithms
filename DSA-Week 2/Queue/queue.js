class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length===0
    }

    size(){
        return this.items.length;
    }

    display(){
        console.log(this.items);
    }
}

const queue=new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();

queue.display()