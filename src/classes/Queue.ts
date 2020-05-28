export class Queue<T> {
  private values: T[]
  constructor(values: T[] = []) {
    this.values = values
  }

  enqueue(value: T) {
    this.values.push(value)
    return this.values
  }

  dequeue() {
    return this.values.shift()
  }

  get first() {
    return this.values.find(Boolean)
  }

  get last() {
    return this.values
      .slice()
      .reverse()
      .find(Boolean)
  }

  get size() {
    return this.values.length
  }
}
