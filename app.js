class Queue{

    constructor(){
        this.items = {};
        this.start = 0;
        this.end =0;
    };
    
    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    };

    dequeue(){
        if (this.start === this.end) {
            return console.log(`The queue is empty`);
        } else {
            const data = this.items[this.start];
            delete this.items[this.start];
            this.start++;
            return data;
        }
    };

    size(){
        return this.end - this.start;
    };

    empty(){
        if (this.size() === 0) {
            return true;
        } else {
            return false;
        }
    };

    peek(){
        if (this.size() === 0) {
            return console.log(`The queue is empty`);
        } else {
            return this.items[this.start];
        }
    };

    print(){
        if (this.size() === 0) {
            return console.log(`The queue is empty`);
        } else {
            let values = '';
            for (let i = 0; i < this.end; i++) {
                values += this.items[i] + " ";
                
            };

            return values;
        }
    };
}

module.exports = Queue;