class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        return this.items=[]
    }

    display(){
        console.log(this.items);
    }
}

const stack=new Stack();

stack.push(5)
stack.push(6)
stack.push(7)
console.log(stack.isEmpty())
console.log(stack.size())
stack.clear()

stack.display()
