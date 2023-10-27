### What is libuv, how does it works
libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops. It is an integral part of the Node.js runtime and is responsible for handling I/O operations, timers, networking, and other low-level functionalities.

The library enforces an asynchronous, event-driven style of programming and offers core utilities like timers, non-blocking networking support, asynchronous file system access, child processes and more.

In terms of how it works, libuv uses an event loop to manage I/O operations. The event loop waits for events to occur and then executes the corresponding callbacks. This allows for non-blocking I/O operations and efficient use of system resources.

libuv is used by several software projects including Node.js, Luvit, Julia, uvloop and others.

### Explain event loop
The event loop is a programming construct that is used to handle asynchronous events in a non-blocking manner. It is a constantly running process that monitors both the callback queue and the call stack.

When an event occurs, it is added to the callback queue. The event loop then waits until the call stack is empty and places the next function from the callback queue to the call stack. This allows for non-blocking I/O operations and efficient use of system resources 1.

The event loop is an essential part of JavaScript’s runtime model and is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. It offers some nice properties when reasoning about your program, including the fact that whenever a function runs, it cannot be preempted and will run entirely before any other code runs (and can modify data the function manipulates)

### What is process.nextTick(), setTimeout(), setImmediate(), In which order it will execute and why?
process.nextTick(), setTimeout(), and setImmediate() are all used to schedule callbacks to be executed at a later time. However, they have different execution orders and use cases.

process.nextTick() is used to schedule a callback to be executed immediately after the current operation completes, but before the event loop continues. It has the highest priority among the three and is executed before any other I/O events or timers.

setTimeout() is used to schedule a callback to be executed after a specified delay in milliseconds. It is added to the timer queue and executed after all I/O events have been processed.

setImmediate() is used to schedule a callback to be executed in the next iteration of the event loop, immediately after I/O events have been processed. It has a lower priority than process.nextTick() but higher than setTimeout().

Therefore, the order of execution would be:

* process.nextTick()
* setImmediate()
* setTimeout()

However, it’s important to note that the exact order of execution can vary depending on the number of callbacks queued up for each method and their respective priorities.

### Difference between spawn() and fork() methods
In node.js, spawn() and fork() are two methods used to create child processes. While both methods are used to create child processes, they have different use cases and execution orders.

spawn() is used to initiate a command in a new process. It returns a child process instance that implements the EventEmitter API. Handlers for events can be attached or registered to the child instance created. Some of the events that can be attached or registered on that child instances are disconnect, error, close, and message, etc.

fork() is used to create a new Node.js process and execute a specified module in that process. It is a special case of the spawn() method where the new Node.js process runs the same code as the parent process, but with a different environment.

The main difference between the two methods is that spawn() creates a new process through command rather than running on the same node process, while fork() creates a new V8 instance and runs on the same node process as the parent.

Therefore, if you want to create a new Node.js process that runs the same code as the parent process, but with a different environment, you should use fork(). If you want to initiate a command in a new process, you should use spawn().

### Difference between promise and async/await
In JavaScript, **Promises** and **async/await** are both used to handle asynchronous operations. Promises are a pattern for handling async operations, while async/await is a syntax sugar built on top of Promises to make it easier to handle async operations. 

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow you to handle the result of that operation when it's ready. Promises have three states: `pending`, `fulfilled`, and `rejected`. You can use `.then()` method to handle a fulfilled promise and `.catch()` method to handle a rejected promise. 

Async/await is used to work with Promises in asynchronous functions. It is basically syntactic sugar for Promises and makes asynchronous code look more like synchronous/procedural code, which is easier to understand. The `await` keyword can only be used in async functions. It is used for calling an async function and waits for it to resolve or reject. `await` blocks the execution of the code within the async function in which it is located.

Here's a summary of the differences between Promises and async/await:

| **Promises** | **Async/Await** |
|--------------|-----------------|
| A pattern for handling async operations | Syntactic sugar built on top of Promises |
| Uses `.then()` method to handle a fulfilled promise and `.catch()` method to handle a rejected promise | Uses `try` block for a successfully resolved promise and `catch` block for a rejected promise |
| Can be used with any function that returns a Promise | Can only be used with functions that return Promises |
| Can be difficult to read and understand | Makes asynchronous code look more like synchronous/procedural code, which is easier to understand |

### What is micro-service?
In the field of software application development, **microservices** are a form of service-oriented architecture that involves building a single application with lightweight protocols by interconnecting small services. 

**Node.js** is a popular choice for developing microservices because it uses an event-driven architecture and enables efficient, real-time application development. 

Here are some benefits of using microservices with Node.js:

- Scalability: Microservices allow you to scale only what is required, saving time and effort and, as a result, money.
- Modularity: The integration of smaller services improves the modularity of the single monolithic app.
- Flexibility: Microservices are loosely coupled, also referred to as distributed applications. A fault in one component won’t affect the functionality of the entire software product.

### How micro-service communicate with each others?

In a microservice architecture, communication between services is made possible through an inter-service communication protocol like HTTP (s), gRPC, or message brokers.

Node.js provides easy and fast integration with most of the latest message brokers such as RabbitMQ and Kafka. Microservices can communicate with each other via various communication mechanisms. We can use either a synchronous, request-response-based communication strategy or an asynchronous, event-based communication strategy for inter-microservice communication.

For synchronous requests, we can use a proxy such as Nginx, Amazon API Gateway, etc.

For asynchronous requests, we can use queues such as RabbitMQ, Amazon SQS, etc4.