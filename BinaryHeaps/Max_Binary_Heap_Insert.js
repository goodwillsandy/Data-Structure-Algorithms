class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        let itemToBeRemoved = this.values[0];
        let lastItem = this.values[this.values.length-1];
        this.values.pop();
        if(!this.values.length) return itemToBeRemoved;
        this.values[0] = lastItem;
        // call sinkDown
        this.sinkDown();
        return itemToBeRemoved;
    }
    sinkDown(){
        let parentIdx = 0; //start with 0th index
        
        while(parentIdx < this.values.length -1){
            let parentItem = this.values[parentIdx];

            let leftChildIdx = 1 + (2*parentIdx);
            let rightChildIdx = 1 + leftChildIdx;
            let rightItem, leftItem;
            if(leftChildIdx < this.values.length){
                leftItem = this.values[leftChildIdx];
            }
            if(rightChildIdx < this.values.length){
                rightItem = this.values[rightChildIdx];
            }
            // exiting sink down when there are no rightChild & leftChild
            if(leftItem === undefined && rightItem === undefined) return;
            // if parent is grater than both child node then exit
            if(parentItem > leftItem && parentItem > rightItem) break;

            if(rightItem > leftItem){
                if(parentItem > rightItem) break;
                // swap with rightItem
                this.values[parentIdx] = rightItem;
                this.values[rightChildIdx] = parentItem;
                parentIdx = rightChildIdx;
                rightItem = null;
            } else {
                if(parentItem > leftItem) break;
                // swap with lefttItem
                this.values[parentIdx] = leftItem;
                this.values[leftChildIdx] = parentItem;
                parentIdx = leftChildIdx;
                leftItem = null;
            }

        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(10);
console.log(heap.values)



