<h2> React.js interview question </h2>

<details>
<summary><b>Feature of react</b></summary>

* JSX (JavaScript Syntax Extension)
* Virtual DOM
* One-way data binding
* Performance
* Extensions
* Conditional statements
* Components
* Simplicity

</details>

### Controlled component and uncontrolled component

### What is useRef

### what are the hooks you have used?

<details>
<summary><b>What is useReducer?</b></summary>
useReducer is a React Hook that allows you to manage complex state logic in your components. It’s similar to useState but gives you more control over the state updates

The basic structure of useReducer is as follows

```js
const [state, dispatch] = useReducer(reducer, initialState);
```
Here, reducer is a function that determines how the state should be updated based on an action. It takes the current state and an action, and returns the new state.

initialState is the initial state of your component.

dispatch is a function that you can call to dispatch an action, which will trigger a state update.

Here’s an example of how you might use useReducer in a todo app:

```js
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
```
Here’s an example of how you might use useReducer in a counter app:
```js
import React, {useReducer} from 'react';

const initialState = { count: 0 };

function reducer(action, state) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1};
        case 'decrement':
            return {count: state.count -1 };
        default:
            throw new Error('')
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Counter Example
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
        </>
    )
}

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Counter />
    </StrictMode>
)
```

</details>

### How to get the previous state while using useState


<details>
<summary><b>useMemo vs React.memo</b></summary>

useMemo and React.memo are both features in React that use memoization to optimize performance, but they are used in different scenarios.

useMemo is a hook that returns a memoized value. It takes a function and dependencies as parameters. The function runs when the component renders. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Here’s an example of how you might use useMemo:
```js
import React, { useMemo } from 'react';

function Component({ value }) {
  const computedValue = useMemo(() => {
    // Perform expensive computation here
    return expensiveComputation(value);
  }, [value]);

  // ...
}
```

React.memo is a higher-order component that memoizes the result of a function component. It takes a component and returns a new component that will prevent re-renders if the props are the same. This can be useful when rendering of the component is expensive.

Here’s an example of how you might use React.memo:
```js
import React from 'react';

function Component({ value }) {
  // ...
}

export default React.memo(Component);
```

In this example, the Component will only re-render if the value prop changes.

In summary, useMemo is used to memoize values, while React.memo is used to prevent unnecessary re-renders of components

</summary>


Context api
Usecallback
React18 new features
Custom hooks
Pure component and pure function
Useref, forwarRef, createRef
Redux
Redux toolkit
Redux saga vs redux think
Generator functions
Uu libraries: material ui, bootstrap
Styled component