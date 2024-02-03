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
newList.getSize();
newList.getHead();
newList.getTail();

console.log("whole list")
console.log(newList)