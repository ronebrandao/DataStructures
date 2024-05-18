type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;

    if (!this.tail) {
      this.tail = this.head = { value: item } as Node<T>;
    }
  }

  deque(): Node<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    return head;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
