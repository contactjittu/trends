<h2>Javascript theoretical interview question</h2>

<details>
<summary><b>What is hoisting?</b></summary>

Hoisting is a term used in JavaScript that refers to the default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). This means that a variable can be used before it has been declared. However, only declarations are hoisted, not initializations. Variables defined with let and const are hoisted to the top of the block, but not initialized. It is always a good practice to declare all variables at the beginning of every scope to avoid bugs in your program.
```Javascript
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5
```

```Javascript
var myVar;
console.log(myVar); // Output: undefined
myVar = 5;
console.log(myVar); // Output: 5
```
In the above example, myVar is undefined when it’s logged the first time because only the declaration (var myVar), not the initialization (= 5), is hoisted to the top

And here’s an example of hoisting with a function:
```Javascript
hoistedFunction(); // Output: "This function has been hoisted."

function hoistedFunction() {
  console.log("This function has been hoisted.");
}
```
In the above example, the entire function declaration (including the body) is hoisted, so you can call it before its declaration in the code.

However, it’s important to note that only function declarations are hoisted. Function expressions (including those involving arrow functions) are not:

```js
notHoisted(); // Output: TypeError: notHoisted is not a function

var notHoisted = function() {
  console.log("This function expression will not be hoisted.");
};
```
In this case, because notHoisted is a function expression and not a declaration, it’s not hoisted and you get a TypeError when you try to call it before its declaration. The variable notHoisted is hoisted, but at the point where it’s called, it holds undefined, which is not callable as a function.

</details>

<details>
<summary><b>What is closure, what are the benefits of it?</b></summary>
Explanation 1:

Closure is a concept in JavaScript that allows a function to access variables from an outer function that has already returned. In other words, a closure is created when a function returns another function that has access to the parent function’s variables. 

The benefits of using closures include:

* Encapsulation: Closures allow you to encapsulate variables and functions, which can help you avoid naming collisions and keep your code organized.
* Data privacy: Closures can be used to create private variables and methods that are not accessible from outside the function.
* Function factories: Closures can be used to create functions with different sets of parameters or default values.
* Partial application: Closures can be used to create new functions with some of the arguments of the original function already set.

Here’s an example of how closures can be used to create private variables:
```Javascript
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
```

Explanation 2:

A closure in JavaScript is a feature that allows inner functions to access the outer scope of a function. It helps in binding a function to its outer boundary and is created automatically whenever a function is created1. A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function

Here’s an example of a closure in JavaScript:

```Javascript
function outerFunc() {
  const outerVar = "I'm a variable in the outer function";
  function innerFunc() {
    console.log(outerVar);
  }
  return innerFunc;
}

const closure = outerFunc();
closure(); // "I'm a variable in the outer function"
```
In this code, innerFunc has access to the variables and functions in the scope of outerFunc, even after outerFunc has completed execution.

Closures have several benefits in JavaScript:

1. Encapsulation: By encapsulating data and functionality within a closure, you can create self-contained units of code that are easy to understand and maintain.
```Javascript
function createBook(title, author) {
  let _title = title;
  let _author = author;
  return {
    getTitle: function() {
      return _title;
    },
    getAuthor: function() {
      return _author;
    },
    setTitle: function(newTitle) {
      _title = newTitle;
    },
    setAuthor: function(newAuthor) {
      _author = newAuthor;
    }
  }
}

const book1 = createBook('Clean Code', 'Robert Cecil Martin');
console.log(book1.getTitle()); // 'Clean Code'
console.log(book1.getAuthor()); // 'Robert Cecil Martin'
book1.setTitle('Code Complete');
console.log(book1.getTitle()); // 'Code Complete'
```
2. State Retention: Variables in closures can help you maintain a state that you can use later.
```Javascript
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
```
3. Currying: Closures allow you to bind some arguments of a function and create a new one.
```Javascript
function createFormatter(prefix) {
  return function(value) {
    return prefix + value;
  }
}

const formatCurrency = createFormatter('$');
const formatPercentage = createFormatter('%');

console.log(formatCurrency(123.45)); // $123.45
console.log(formatPercentage(0.1234)); // %0.1234

const price = 123.45;
console.log(`The price is ${formatCurrency(price)}`); // The price is $123.45

const percentage = 0.1234;
console.log(`The percentage is ${formatPercentage(percentage)}`); // The percentage is %0.1234
```
4. Memoization: Closures can be used to store computation results that can be reused later, improving performance.
```Javascript
function createFibonacciGenerator() {
  const cache = {};

  return function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    } else {
      let a = 0, b = 1, c;
      for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
      }
      cache[n] = a;
      return a;
    }
  }
}

const fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator(10)); // 55
console.log(fibonacciGenerator(10)); // 55
```
5. Asynchronous Programming: Closures are useful in asynchronous programming as they help maintain the state between events.
```Javascript
function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else if (xhr.readyState === 4) {
        reject(xhr.status);
      }
    }
    xhr.open('GET', url);
    xhr.send();
  });
}

getData('https://your-domain.com/api/users')
  .then(users => console.log(users))
  .catch(error => console.error(error));
```
6. Event Handling: Closures are useful in event handling as they provide an easy way to pass additional data to an event handler
```Javascript
function createMenu(items) {
  let currentItem = 0;

  return {
    next: function() {
      currentItem = (currentItem + 1) % items.length;
      return items[currentItem];
    },
    prev: function() {
      currentItem = (currentItem - 1 + items.length) % items.length;
      return items[currentItem];
    },
    handleKeydown: function(event) {
      if (event.keyCode === 37) {
        // left arrow key
        console.log(this.prev());
      } else if (event.keyCode === 39) {
        // right arrow key
        console.log(this.next());
      }
    }
  }
}

const menu = createMenu(['Home', 'About', 'Contact']);

document.addEventListener('keydown', menu.handleKeydown.bind(menu));
```
</details>

#### What is reference error, Type error

#### Object destructor

#### How to create copy of object

#### Shallow copy, deep copy

#### what is event bubbling?

#### What is currying function?

#### Explain call, bind, apply

#### Their is an employee object with multiple properties. I want to create new employe object but don't want modification and deletion of existing properties.