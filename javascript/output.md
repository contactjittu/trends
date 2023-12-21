### Javascript output program

```js
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

```js
console.log(num); // undefined
var num;
num = 20;
```

```js
console.log(num); // ReferenceError: Cannot access 'num' before initialization
let num;
num = 20;
```

```js
let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

```js
const a; // SyntaxError: Missing initializer in const declaration
a = 1;
console.log(a);
```

```js
let a = 10;
var a = 10; // SyntaxError: Identifier 'a' has already been declared
```

```js
var text = 'outside';
function printMe() {
  console.log(text); // undefined
  var text = 'inside';
}
printMe();
```

```js
var text = 'outside';
function printMe() {
  console.log(text); // undefined
  var text = 'inside';
  console.log(text); // inside
}
printMe();
```

```js
const parent = {
  mom_name: 'Samantha Quinn',
  mother: () => {
    return `${this.mom_name} is my manager.`;
  },
};
console.log(parent.mother()); // undefined is my manager.
```

```js
const parent = {
  mom_name: 'Samantha Quinn',
  mother: function() {
    return `${this.mom_name} is my manager.`;
  },
};
console.log(parent.mother()); // Samantha Quinn is my manager.
```

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');

Output: 
start
1
end
2
```

```js
const promise1 = Promise.resolve(42);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "Error occurred"));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, "Hello"));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  });

Output:
[
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: 'Error occurred' },
  { status: 'fulfilled', value: 'Hello' }
]
```