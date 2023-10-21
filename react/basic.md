### React.js interview question

Feature of react
* JSX (JavaScript Syntax Extension)
* Virtual DOM
* One-way data binding
* Performance
* Extensions
* Conditional statements
* Components
* Simplicity

### Controlled component and uncontrolled component

### What is useRef

### momo and useMomo

### what are the hooks you have used?

### What is useReducer?
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
### How to get the previous state while using useState
