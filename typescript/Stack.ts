type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;

    if (!this.head) {
      this.head = node;
    }

    const prev = this.head;
    this.head = node;
    this.head.prev = prev;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(6);

console.log(stack.length);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.length);
