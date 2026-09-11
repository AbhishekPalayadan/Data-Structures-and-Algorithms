class Queue{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop();
    }

    display(){
        console.log(this.items)
    }
}


const queue=new Queue();

queue.push(5)
queue.push(6)
queue.push(7);
queue.push(8);
queue.pop();

queue.display()