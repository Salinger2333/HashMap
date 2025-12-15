import { HashMap } from "./HashMap.js"

const test = new HashMap
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get("lion"));
// console.log(test.length());
// console.table(test.keys());
// console.table(test.values());
console.table(test.entries());
// test.clear()
// console.table(test.keys());

// it will exceed the load factor
test.set('moon', 'silver')
console.log(test.length());
console.table(test.entries());
