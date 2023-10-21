### Javascript output program

```javascript
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

```javascript
let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

```javascript
let a;
console.log(a); // SyntaxError: Missing initializer in const declaration
a = 10;
console.log(a); // program terminate
```

```javascript
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

```javascript
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