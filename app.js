class Stack{

    constructor(){
        this.items = {};
        this.top = 0;

    };

    push(data){
        this.top++;
        this.items[this.top] = data;
    };

    pop(){
        let deletedItem;
        if (this.top === 0) {
            return console.log(`This stack is empty`);
        } else {
            deletedItem = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedItem;
        };

    };

    size(){
        return this.top;
    };

    empty(){
        if (this.size() === 0) {
            return true;
        } else {
            return false;
        };
    };

    peek(){
        if (this.size() === 0) {
            return console.log(`This stack is empty`);
        } else {
            return this.items[this.top];
        };

    };

    print(){
        let values = '';
        for (let i = this.top; i > 0; i--) {
            values += this.items[i] + ' ';
        };
           return values;
    };

};

module.exports = Stack;