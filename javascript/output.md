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
let r = foo();
console.log(r()); // output: NaN

var x = 10;
function foo() {
  var y = 20;
  function bar() {
    var z = 30;
    return x + y + z;
  }
  return bar;
}

```

In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope. However, the assignments are not hoisted. This means that the variable x is declared at the top of the scope due to hoisting, but it’s not assigned the value 10 until after the function foo is called and r() is executed.

Here’s the hoisted version of your code for clarity:
```js
var x; // x is declared here due to hoisting, but it's undefined
var r;
function foo() {
  var y = 20;
  function bar() {
    var z = 30;
    return x + y + z; // x is undefined here, so the result is NaN
  }
  return bar;
}

r = foo();
console.log(r()); // logs NaN because x is undefined when r() is executed

x = 10; // x is assigned the value 10 here, but it's too late
```
So, when r() is executed, x is still undefined, and undefined + 20 + 30 results in NaN. That’s why console.log(r()) outputs NaN.


<details>
<summary>Explain

```js
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
});
promise1.then(() => {
  console.log(3);
});
console.log(4);

Output: 
start
1
4
3
```
</summary>
simple example of JavaScript Promises and the event loop.

Here's a step-by-step explanation:

console.log("start") is executed first, logging "start" to the console.

Then, promise1 is created. This is a Promise that immediately logs 1 to the console and then resolves with the value 'success'.

The .then() method is chained to promise1. This sets up a callback function to be executed when promise1 resolves. This callback function will log 3 to the console.

However, Promises in JavaScript are asynchronous. This means that even though promise1 has already resolved, the .then() callback won't be executed until all synchronous code has finished running.

So, console.log(4) is executed next, logging 4 to the console.

Finally, now that all synchronous code has finished, the .then() callback is executed, logging 3 to the console.

This demonstrates how JavaScript's event loop works. Even though promise1 resolves before console.log(4) is executed, the Promise's .then() callback isn't called until after all synchronous code has run.
</details>

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