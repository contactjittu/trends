<details>
<summary>
<b>Design patterns in Nodejs</b>
</summary>
Node.js applications often use several design patterns to promote code reuse, maintainability, and robustness. Here are some of the key design patterns used in Node.js:

1. **Singleton Pattern**: This pattern restricts the number of instantiations of a "class" to one. Creating singletons in Node.js is straightforward, as `require` is there to help you.

2. **Observer Pattern**: An object maintains a list of dependents/observers and notifies them automatically on state changes. To implement the observer pattern, `EventEmitter` comes to the rescue.

3. **Factory Pattern**: This is a creational pattern that doesn't require us to use a constructor but provides a generic interface for creating objects. This pattern can be really useful when the creation process is complex.

4. **Dependency Injection Pattern**: This is a software design pattern in which one or more dependencies (or services) are injected, or passed by reference, into a dependent object.

5. **Middleware Pattern**: In Node.js, middleware is the design pattern that allows a developer to add functionalities in the request/response processing pipelines of the application.

6. **Immediately Invoked Function Expressions (IIFE)**: The first pattern we'll explore is one that allows you to define and call a function at the same time.

7. **Builder Pattern**: This pattern allows a client object to construct a complex object by specifying only its type and content.

8. **Prototype Pattern**: This pattern is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

9. **Chain of Responsibility Pattern**: This pattern decouples the sender and receiver of a request based on the type of request.

These patterns help in structuring the code in a way that promotes reusability, flexibility, and efficiency. They also make the code easier to understand and maintain..

(1) Fundamental Node.js Design Patterns - RisingStack Engineering. https://blog.risingstack.com/fundamental-node-js-design-patterns/.

(2) A guide to Node.js design patterns - LogRocket Blog. https://blog.logrocket.com/guide-node-js-design-patterns/.

(3) The 4 Creational Design Patterns in Node.js That You Should Know. https://betterprogramming.pub/the-4-creational-design-patterns-in-node-js-that-you-should-know-cfb7ed77a84e.

(4) Design Patterns in Node.js - Medium. https://medium.com/@techsuneel99/design-patterns-in-node-js-31211904903e.

(5) Design Patterns in Node.js. Introduction | by Ben Mishali | Medium. https://medium.com/@ben.dev.io/design-patterns-in-node-js-227673162879.

</details>

<details>
<summary>
<b>Example of design patterns in Nodejs</b>
</summary>

Here are examples of the design patterns:

1. **Singleton Pattern**:
In Node.js, modules are cached after the first time they are loaded. This means that every call to `require('foo')` will get exactly the same object returned, if it would resolve to the same file. This feature can be used to implement singleton pattern in Node.js.

```javascript
// Singleton.js
class Singleton {
  constructor() {
    this.message = 'I am an instance';
  }
}

module.exports = new Singleton();
```

2. **Observer Pattern**:
The observer pattern can be implemented in Node.js using the EventEmitter class.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');
```

3. **Factory Pattern**:
The factory pattern can be implemented in Node.js as follows:

```javascript
class Car {
  constructor(name) {
    this.name = name + '-' + Math.random().toString(36).substring(2, 15);
  }

  showInfo() {
    console.log(`I'm ${this.name}`);
  }
}

class CarFactory {
  create(type) {
    switch (type) {
      case 'Audi':
        return new Car('Audi');
      case 'BMW':
        return new Car('BMW');
      case 'Mercedes':
        return new Car('Mercedes');
      default:
        console.log('Unknown Car type...');
    }
  }
}

module.exports = new CarFactory();
```

4. **Dependency Injection Pattern**:
The dependency injection pattern can be implemented in Node.js as follows:

```javascript
class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  getUserData() {
    this.userRepo.getAll();
  }
}

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUserData() {
    this.userService.getUserData();
  }
}
```

5. **Middleware Pattern**:
The middleware pattern can be implemented in Node.js using Express.js.

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

6. **IIFE Pattern**:
The IIFE (Immediately Invoked Function Expression) pattern can be implemented in Node.js as follows:

```javascript
(function() {
  console.log('This is an IIFE');
})();
```

7. **Builder Pattern**:
The builder pattern can be implemented in Node.js as follows:

```javascript
class HouseBuilder {
  constructor(address) {
    this.address = address;
  }

  setFloor(floor) {
    this.floor = floor;
    return this;
  }

  makeParking() {
    this.parking = true;
    return this;
  }

  makeGarden() {
    this.garden = true;
    return this;
  }

  build() {
    return new House(this);
  }
}

class House {
  constructor(builder) {
    this.address = builder.address;
    this.floor = builder.floor;
    this.parking = builder.parking;
    this.garden = builder.garden;
  }
}

const myHouse = new HouseBuilder('John Street 14').setFloor(4).makeParking().makeGarden().build();
```

8. **Prototype Pattern**:
The prototype pattern can be implemented in Node.js as follows:

```javascript
function Prototype() {
  this.greeting = 'Hello World';
}

Prototype.prototype.greet = function() {
  console.log(this.greeting);
}

Prototype.prototype.clone = function() {
  var clone = Object.create(Object.getPrototypeOf(this));
  var keys = Object.getOwnPropertyNames(this);
  for (var i = 0; i < keys.length; i++) {
    Object.defineProperty(clone, keys[i], Object.getOwnPropertyDescriptor(this, keys[i]));
  }
  return clone;
}

const object = new Prototype();
object.greet();

const cloned = object.clone();
cloned.greeting = 'Hi there!';
cloned.greet();
```

9. **Chain of Responsibility Pattern**:
The chain of responsibility pattern can be implemented in Node.js as follows:

```javascript
class Request {
  constructor(amount) {
    this.amount = amount;
  }

  get(bill) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`Dispense ${count} $${bill} bills`);
    return this;
  }
}

const request = new Request(378);
request.get(100).get(50).get(20).get(10).get(5).get(1);
```

Please note that these are just simple examples and real-world use cases may require more complex and robust implementations. Also, it's important to choose the right pattern based on the specific needs of your project.

</details>
