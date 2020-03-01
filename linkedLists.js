class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    };

};


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;

    };

    add(data){
        const node = new Node(data, null);
        if(!this.head){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            };
            current.next = node;
        };
        this.size++;
    };

    insertAt(data, index){
        if (index < 0 || index > this.size) {
          return null;  
        };
        const node = new Node(data);
        let current = this.head;
        let previous;
        

        if (index === 0){
            node.next = current;
            this.head = node;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            node.next = current;
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
            result += current.data += ' -> ';
            current = current.next;
        };
        result += ' X ';
        return result;
    };

    removeElement(data){
        let current = this.head;
        let previous = null;

        while (current != null) {
            if(current.data === data){
                if(!previous){
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    };

    removeFrom(index){
        if (index < 0 || index > this.size) {
            return null;
        };
        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size--;
        return current.data;
    };

    empty(){
        return this.size === 0;
    };

    getSize(){
        return this.size;
    };

};

module.exports = LinkedList, Node;