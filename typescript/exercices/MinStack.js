var MinStack = function () {
    this.length = 0;
    this.head = undefined;
    this.min = undefined;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.length++;

    const item = { val, prev: undefined };

    if (this.head) {
        const temp = this.head;
        this.head = item;
        this.head.prev = temp;

        if (item.val <= this.min.val) {
            const oldMin = this.min;
            this.min = { val, prev: undefined };
            this.min.prev = oldMin;
        }
    } else {
        this.head = item;
        this.min = item;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.length--;

    const temp = this.head
    this.head = temp.prev;

    if (this.min.val == temp.val) {
        this.min = this.min.prev;
    }

    return temp.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min.val;
};


const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.getMin();
minStack.pop();
minStack.getMin();
