### Portal Question

<details>
<summary>
Create a throttle function that takes a function and returns a throttle function that does the same thing but can only execute once per 100 millisecond. For example, if a function is called 4 times in a span of 100 millisecond, it should only execute the first request
</summary>

A throttle function that takes a function and returns a new function that can only execute once per 100 milliseconds using the following code:

```javascript
function throttle(func) {
  let lastExecuted = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastExecuted >= 100) {
      lastExecuted = now;
      func(...args);
    }
  };
}
```

In this code, `throttle` is a function that takes a function `func` as an argument and returns a new function that can only execute once per 100 milliseconds. The `lastExecuted` variable keeps track of the last time the function was executed. The returned function checks the current time against the last time the function was executed. If the difference is greater than or equal to 100 milliseconds, the function is executed and the `lastExecuted` variable is updated.

Here's an example of how you can use the `throttle` function:

```javascript
function myFunction() {
  console.log('Function called');
}

const throttledFunction = throttle(myFunction);

throttledFunction(); // Output: Function called
throttledFunction(); // No output
throttledFunction(); // No output
```

In this example, `myFunction` is a function that logs a message to the console. We create a new function `throttledFunction` by calling the `throttle` function with `myFunction` as an argument. We then call `throttledFunction` three times in quick succession. The first call executes the function and logs the message to the console. The second and third calls do not execute the function because they are within the 100 millisecond window.

</details>