1. What problem does the context API help solve?

Context solves the problem of ‘prop drilling.’ It lets you share data between components without having to pass props through every level of the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that describe changes to state. Action creators are functions that return action objects. Action creators are called by the dispatch function when we want to update state.

Reducer functions take the current state and an action object as arguments and return a new, updated state.

The store is an object that contains the state for the application. Inside the store, state is immutable. The only way to update state is to copy the current state, modify the copy through the reducer function, and replace the original state with the new, updated copy.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that needs to be shared by multiple components and is maintained in the store. Component state is state that is only used and managed within a particular component and is not passed to other components. You should use component state when it will only be used in inside the component, and application state if it will be used by more than one component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is middleware that allows us to make asynchronous API calls from action creators. When an action creator is called, Redux Thunk intercepts it and acts on the returned data. If an action object is returned, Redux Thunk forwards it to the reducer. If a function is returned (referred to as a ‘thunk’), it invokes the function and passes the dispatch function as an argument.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Context API because it has simple syntax and lets you share data around an app like you can with Redux, but you don’t have to utilize reducers, the connect function, or the store.
