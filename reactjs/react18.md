## React 18

<details>
<summary><b>React 18 new features and improvements</b></summary>

React 18 introduces several new features and improvements:

1. **Concurrent Rendering**: This is the most significant addition in React 18. It's a new mechanism that enables React to prepare multiple versions of your UI at the same time. It allows React to interrupt, pause, resume, or abandon a render, improving the responsiveness of user interactions.

2. **Automatic Batching**: This out-of-the-box improvement enhances the performance of React applications.

3. **Transitions**: This new API helps in managing longer-lasting updates like data fetching.

4. **Suspense on the Server**: React 18 introduces streaming server-side rendering with built-in support for Suspense.

5. **New APIs**: These include `createRoot`, `hydrateRoot`, `renderToPipeableStream`, and `renderToReadableStream`.

6. **New Hooks**: These include `useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore`, and `useInsertionEffect`.

7. **Strict Mode Updates**: There are new behaviors in strict mode.

8. **Deprecations**: `ReactDOM.render` and `renderToString` are now discouraged.

These features are built on top of the new concurrent renderer, a behind-the-scenes change that unlocks powerful new capabilities. React 18 sets the foundation for concurrent rendering APIs that future React features will be built on top of.
</details>

<details>
<summary><b>useTranstion and useDefferedValue</b></summary>

Two hooks introduced in React 18:

1. **useTransition**: This hook allows you to update the state without blocking the UI. It returns an array with two items: `isPending` and `startTransition`. `isPending` is a flag that tells you whether there is a pending transition. `startTransition` is a function that lets you mark a state update as a transition. This hook is useful for managing longer-lasting updates like data fetching.

Here's an example of how to use `useTransition`:

```javascript
import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```

2. **useDeferredValue**: This hook lets you defer updating a part of the UI. It takes a value as a parameter and returns a deferred version of that value. This is especially useful when dealing with scenarios involving the display of large datasets or the execution of resource-intensive computations.

Here's an example of how to use `useDeferredValue`:

```javascript
import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}
```

In this example, `useDeferredValue` is used to defer the update of the `query` state, allowing the UI to remain responsive while the new state is being computed.

These hooks are part of the new concurrent features in React 18, designed to improve the responsiveness and performance of React applications.
</details>