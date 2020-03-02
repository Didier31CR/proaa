class Node{
    constructor(data, next, previous){
        this.data = data;
        this.next = next;
        this.previous = previous;
    };

};


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data){
        const node = new Node(data, this.head, null);
        if(this.head){
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        };
        this.size++;
    };

    addToTail(data){
        const node = new Node(data, null, this.tail);
        if (this.tail) {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.tail = node;
            this.head = node;
        };
        this.size++;
    };

    insertAt(data, index){
        if (index < 0 || index > this.size) {
          return null;  
        };
        const node = new Node(data, null, null);
        let current = this.head;
        let previous;
        

        if (index === 0){
            node.next = current;
            current.previous = node;
            this.head = node;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            node.next = current;
            node.previous = previous;
            current.previous = node;
            previous.next = node;
        };
        this.size++;

    };

    print(){
        if (!this.size) {
            return null;
        };
        let current = this.head;
        let result = '';
        while(current){
            result += current.data += ' <-> ';
            current = current.next;
        };
        result += ' X ';
        return result;
    };

    reversePrint(){
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.previous;
        };
        return result += ' X ';
    };

    removeFromHead(){
        if (!this.head) {
            return null;
        };
        const value = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        };
        this.size--;
        return value;
    };
    removeFromTail(){
        if (!this.tail) {
            return null;
        };
        const value = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
        };
        this.size--;
        return value;
    };

    removeElement(data){
        let current = this.head;
        let previous = null;

        while (current != null) {
            if(current.data === data){
                if(!previous){
                    return this.removeFromHead();
                } else if(!current.next){
                    return this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.previous = previous;
                };
                this.size--;
                return current.data;
                
            };
            previous = current;
            current = current.next;
        };
        return null;
        
    };


    empty(){
        return this.size === 0;
    };

    getSize(){
        return this.size;
    };

};

module.exports = DoublyLinkedList, Node;