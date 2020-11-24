class MaxStack {
  constructor() {
    this.elements = [];
  }
  push = (x) => {
    if (this.elements.length === 0) {
      this.elements.push([x, x]);
      return;
    }
    const currMax = this.last()[1];
    this.elements.push([x, Math.max(x, currMax)]);
  };
  last = () => this.elements[this.elements.length - 1];
  pop = () => this.elements.pop();
  top = () => this.last()[0];
  getMin = () => this.last()[1];
  print = () => console.log(this.elements);
}
const x = new MaxStack();
x.push(1);
x.push(3);
x.push(3);
x.push(5);
x.push(2);
x.push(-1);
x.pop();
x.print();
console.log(x.getMin());
