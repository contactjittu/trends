<h2> Redux interview question </h2>

<details>
<summary><b>Basic implementation of redux</b></summary>

```js
import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store
let store = createStore(counter);

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    value: state
  }
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment())
  }
};

// Connected Component
const Counter = ({ value, onIncrement }) => (
  <div>
    <span>{value}</span>
    <button onClick={onIncrement}>Increment</button>
  </div>
);

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

In this example, I have created a simple counter. The `increment` function is an action creator that returns an action. The `counter` function is a reducer that takes the current state and an action, and returns the new state. I then create a Redux store with `createStore(counter)`.

The `mapStateToProps` function maps the Redux state to the React component's props. The `mapDispatchToProps` function maps the Redux action creators to the React component's props.

The `Counter` component is a simple functional component that displays the current count and a button to increment the count. The `connect` function connects the Redux store to the `Counter` component.

Finally, I use the `Provider` component from `react-redux` to make the Redux store available to all child components in the application. The `App` component is rendered into the DOM with `ReactDOM.render`.

</details>

<details>
<summary><b>Implementation of redux on users object</b></summary>

Here's an example of how you can use Redux with React and a `users` object:

First, install the necessary packages:

```bash
npm install react react-dom redux react-redux
```

Then, you can create a Redux store, define actions and reducers, and use them in a React component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define the initial state of our application
const initialState = {
  users: []
};

// Define the actions
const addUserAction = {
  type: 'ADD_USER',
  user: { name: 'New User' }
};

// Define the action
const updateUserAction = (user, id) => ({
  type: 'UPDATE_USER',
  payload: { user, id }
});


// Define the reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.user] };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload.user : user
        )
      };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(userReducer);

// Define a Users component
const Users = ({ users }) => (
  <ul>
    {users.map((user, index) => <li key={index}>{user.name}</li>)}
  </ul>
);

// Connect the Users component to the Redux store
const ConnectedUsers = connect(state => ({ users: state.users }))(Users);

// Render the App component with the Redux provider
ReactDOM.render(
  <Provider store={store}>
    <ConnectedUsers />
  </Provider>,
  document.getElementById('root')
);

// Dispatch the addUserAction
store.dispatch(addUserAction);

// Dispatch the updateUserAction
store.dispatch(updateUserAction({ name: 'Updated User' }, userId));

```

In this example, we have a `users` object in our Redux store. We define an `ADD_USER` action that adds a user to the `users` array. The `userReducer` function takes the current state and an action, and returns the new state. We then create a Redux store with the `userReducer`, and connect our `Users` component to the Redux store using the `connect` function from `react-redux`. Finally, we render our `ConnectedUsers` component inside a `Provider` component, and dispatch our `addUserAction` to the store.

</details>