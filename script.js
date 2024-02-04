class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addAtHead(data){
        const newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    addAtTail(data){
        let current = this.head;

        if(this.head === null){
            this.addAtHead(data);
            return;
        }

        while(current.next !== null){
            current = current.next;
        }

        const newNode = new LinkedListNode(data, null);
        current.next = newNode;
        this.length++;
    }

    getSize(){
        return console.log("size of the list is "+this.length);
    }

    getHead(){
        console.log("first node")
        return console.log(this.head.data)
    }

    getTail(){
        let current = this.head;

        if(this.head === null){
            this.addAtHead(data);
            return;
        }

        while(current.next !== null){
            current = current.next;
        }
        console.log("last node")
        return console.log(current)
    }

    getAtIndex(index){
        let current = this.head;
        
        for(let i = 0; i <= index -1; i++){
            current = current.next;
        }

        console.log("at index")
        console.log(current)
        return current;
    }

    pop(){
        let current = this.head;
        let prev = null;

        while(current.next !== null){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.length--;
    }

    contains(value){
        let containsFlag = false;
        let current = this.head;

        while(current.next !== null){
            current = current.next;
            if(current.data == value){
                return containsFlag = true;
            }
        }
        return containsFlag;

    }

    findAtIndex(value){
        let stepCounter = 0;
        let current = this.head;

        while(current.next !== null){
            current = current.next;
            stepCounter++;
            if(current.data == value){
                return stepCounter;
            }
        }
        return stepCounter = null;
    }

    listToString(){
        let current = this.head;
        let result = 'List: ';
    
        while (current !== null) {
            result += current.data + ' ';
    
            current = current.next;
        }
    
        console.log(result);
        
    }
}

class LinkedListNode{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

let newList = new LinkedList();

newList.addAtHead(20);
newList.addAtHead(40);
newList.addAtTail(30);
newList.addAtTail(130);
newList.addAtTail(60);

newList.getSize();
newList.getHead();
newList.getTail();
newList.getAtIndex(2);
console.log(`was value found? ` + newList.contains(20));
console.log(`your value was found at index: ` + newList.findAtIndex(20));

console.log("whole list")
console.log(newList)
console.log("after pop")
newList.pop();
console.log(newList);

newList.listToString();

