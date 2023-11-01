# Types of React Components

1. Class Components
   - A Javascript class that inherits the React.Component class and has to override the render() method
   - Class Components are more versatality
   - Can have state and props
   - Has a lifecycle that can be managed and maintained
   - Stateful
   - Every time the state changes, class component re-renders
2. Functional Components
   - A plain Javascript `Function` that returns Javascript XML (JSX)
   - Stateless
   - Statefulness and React Life Cycle can be achieved by using React Hooks in Functional Components
   - Functional Components are most useful when the component has properties but the lifecycle of the component doesn't have to be managed
3. Pure Components
4. High-Order Components (HOC)
   - Components return other Components - Compositional Components

# State

- `State` is a plain Javascript object used by React to represent an information about the component's current situation.
- `State` allows you to create dynamic and interactive components.
- Any changes in the state data causes the re-rendering of the component to reflect the change.

# Component Phases:

- In component lifecycle, components are created or mounted on the DOM, they grow by updating, and then die or are unmounted on DOM.
- In the mounting phase, the component is added to the DOM.
- Updating is the phase where the states and props of a component change when some user event occurs.
- The Unmounting phase is the thrid and final phase where the component is removed from the DOM.

- There are 3 component phases:
  1. Mounting -> Component Creation
     - When a component is created and injected into the DOM Tree, 4 methods are called in the same order:
       1. constructor()
       2. getDerivedStateFromProps() => called only when the state depends on the changes from props
       3. componentWillMount() => check this..
       4. render()
       5. componentDidMount()
  2. Updating -> Component Change
     - When a component is updated, 5 methods are called in the same order:
       1. getDerivedStateFromProps()
       2. shouldComponentUpdate()
       3. render()
       4. getSnapshotBeforeUpdate()
       5. componentDidUpdate()
  3. Unmounting -> Component Removal
     - When a component is unmounted and removed from the DOM Tree, the below method is called:
       1. componentWillUnmount()

# Passing data between Components

1. Parent to Child -> Using Props
2. Child to Parent -> Using Callbacks
3. Between Siblings -> Using Redux

# Testing involves 3 stages:

1. Arrange
2. Act
3. Assert

# React Testing Libraries/Tools:

- Mocha, Chai & Sinon
  - Mocha - Test Runner
  - Chai - Assertion Library
  - Sinon - Spies, stubs, mocks
  - Enzyme - Render Components

# React Testing Libraries:

- **Jest**
  - Jest is a Javascript Test Runner was released by Facebook(Meta) to test react components.
  - Brings the combined power of Mocha, Chai, Sinon and many more.
  - Can be combined with Enzyme or React Testing Library to test your react components in even more powerful way
  - Allows to access DOM via `jsdom` for testing React components
  - Great iteration speed with mocking modules and timers
  - Includes Command Line Tool or Test Execution
  - Allows to create Mock Functions with almost zero configuration and makes assertions easier to read
  - Installed as a dependency to React App when using `npm init react-app` along with the React Testing Library
- **React Testing Library**
  - Set of Helpers that lets you test React Components without depending on their implementation details.
  - Provides light utility functions on top of `react-dom` and `react-dom/test-utils`
  - Facilitates querying the DOM, finding form elements, and finding links and buttons
  - Finds elements where the text is not understandable
  - Encourages applications to be more accessible
  - Increases confidence in your tests by testing your components in the same way as an end user would use the components
  - Is a `replacement for Enzyme`

# Module Summary

- State is a plain JavaScript object used by React to represent information about the component’s current situation.

- Props is short for properties, and they are used to pass data between React components in a uni-directional flow from parent to child.

- You can pass data between components from parent to child using properties, from child to parent using callbacks, and between siblings.

- Components are created or mounted on the DOM; they grow by updating and then die or are unmounted on DOM. This is referred to as a component lifecycle.

- React components can be tested using Mocha, Chai, Sinon but preferred approaches are by using Jest and React Testing Library.

# Hooks

- **Advantages of Hooks**

  - Readable
  - Lesser Code
  - Overall optimized component
  - Writing a Functional component with state
  - Writing complex components became easier
  - Handling events and logics in functional components
  - Performance boost with functional components

- **3 Best Practices for using Hooks in React Code**

  - Can be called only from inside React function components. Cannot call Hooks from regular JS functions.
  - Can only be called at the top level of a component. You cannot call Hooks inside loops, conditions or nested functions.
  - Cannot be conditional
  - Use Node version 6 or above
  - Use NPM version 5.2 or above
  - Recommended to use `create-react-app` tool for running the react app

- **List of Standard Hooks**

  - `useState`
    - Adds state to a function component
  - `useEffect`
    - Manages side effects such as:
      - Document changes
      - HTTP and so on..
      - e.g. If you need to fetch data, you could use `useEffect` hook
  - `useContext`
    - Manages context changes and provides the component with access to a context
  - `useReducer`
    - Manages Redux state changes
    - Note: This is not a full replacement for Redux though it could be used in certain situations

- **Custom React Hooks**
  - Essential tools that allow you to add special unique functionality to your React application
  - Are named with prefix as `use`
  - Custom Hook is a composition of one or multiple Hooks
  - Since Hooks can be treated as functions, they have the same feature
    - Are reusable
    - Can be broken into smaller hooks
    - Testable

# React Forms

- Allow user to interact with web page.
  - Most react forms are SPA or web applications that load a single page. On a single page new data is displayed dynamically
- Handle data using components
  - In React, Form data is usually handled by the Components.
  - They allow users to directly input and submit data in components
- Store data in component state
  - When the use input data is handled by the components, all the data is stored in the component state
  - Do not submit the information directly from the form to a server
  - Instead you will capture all the form information on the client side. The data is sent to the server or displayed using additional JS code
- Control changes and update the state of the variable using event handlers

**Handling Form Elements**

- In HTML, the form elements maintain their own state
  - In HTML, Form Elements like `<input>`, `<textarea>` and `<select>`, typically maintain their own state and update it based on user input
- In React, state of these input elements is typically kept in the state property of Components and only updated with `setState`
- Form Validation is not out-of-the box in React. You need to validate the forms in React which involved the tasks such as:
  - Get form values
  - Manage the form state and updating the state with the current values
  - Validate the form on the fly to check the correctness of the input values
  - Show validation messages

**Inputs in React**

- Inputs in React can be of one of 2 types:
  - Uncontrolled Input
    - Simpler of the two.
    - React puts the value on the page and the browser keeps track of the rest
      - Allow the browser to handle most of the form elements and collect data through React's change events
    - Require less code but it difficult to do certain actions
    - Browser handles the form elements, manage their own value in the input's DOM node, HTML elements maintain their own state that will be updated when input value changes
    - To write an uncontrolled component, you need to use `ref` function. `Ref` function is used to get the form values from DOM.
    - There is no need to write an Event Handler for every state update
  - Controlled Input
    - Use React to fully control the element by setting and updating the input value directly.
      - Explicitly control the value that the input displays.
      - You need to write code to respond to key presses, store the current value somewhere and pass the value back to the input to be displayed
      - It requires more code for each action
      - This type of input offers more control over the input value
    - In a Controlled Input, you write code to manage the value explicitly
      - In the code you create state to hold it, update that state when the value changes, and and explicitly give the input what value to display
      - Here, the input form element is handled by the component rather than the DOM
    - Better control over form elements and data
    - A Controlled Component takes its current values through Props and notifies the changes through an `onChange` event
    - A Parent component controls the changes by handling the callback and managing its own state. The new values are then passed as the Props to the controlled component

**React Hook Form**

- Is a useful package for creating simple to complex web forms
- `React Hook Form` is a form state management and validation library for react web-based applications and react-native mobile applications
- Reduces amount of code that developers need to write and also eliminates unnecessary rerender of form components
- Uses ref to control form inputs
- Can be installed using the install command
- Increases performance and reduces the number of re-renders of form components
- Package size is tiny with zero dependencies
- Painless integration with UI libraries

**Redux**

- Redux is a state management library that is often used with react to handle the state of your application
- Redux offers a centralized state management system
- Follows a pattern known as Flux Architecture
- In Flux pattern and in Redux, shared information is not stored in components, but in a single object
- React developers use Redux to handle many state changes in one place called the `Redux Store`. It is also called `The Single Source of Truth`
- In Redux, state is handled globally and allows you to change the state from anywhere in the application
- Redux library is not specific to react, and can be used with any other library or framework like Angular, Vue or even vanilla Javascript. However developers use Redux when working mostly with React.
- Redux enhances performance

**React-Redux**

- The data flow in a React-Redux application is unidirectional
- Redux library has all that it requires for store management and react-redux binds react and redux libraries together.
- A conventional React-Redux application comprises a single store along with a single root Reducer.
- The store management with redux has 3 main components:

  - Actions - These are blocks of information that send data from your application to your store. Actions must have a type property that indicates the type of action being performed.
  - Reducers - Reducers specify how the application’s state changes in response to actions sent to the store.
  - Store - The Store is the object that brings the action and reducer together. The store has the following responsibilities: holds application state, allows access to state, allows state to be updated via dispatch(action). A Store can dispatch and receive actions

**Redux Elements**

- The Redux elements that are involved in updating of the component properties are: `Action, Store, and Reducers.``
- `Actions` are JSON objects that contain information about changes that need to be made to the state.
- The current Redux application state lives in an object that is called the `Store`
- `Reducers` are pure functions that receive the current state and an Action object and return a new state with the actions performed.
- You can subscribe to listen to events whenver the Store updates

**Redux Middleware Techiques**

- React Redux state management is synchronous
- You can interact with Asynchronours data in your React Redux app using middleware
- Thunk Middlware and Saga Middleware are the most popular

1. Thunk Middleware

- Redux Thunk allows you to pass functions within your action creators to create an asynchronous Redux.
- Suitable for simple applications and less boiler plate code needed but do not scale well, has concurrency problems, it is imperative - not very easy to test.

2. Saga Middleware

- Uses an ES6 feature called Generators to enable async operations
- Generators make it easy to read, write and test async flows
- Exposes a set of helper functions or Sagas to create declarative JS objects
- Pros:
  - Allows expressing complex logic as pure functions
  - Easy to test because of predictability, allows separation of concerns
  - Sagas can be time-travelled
  - Makes it easier to scale complex applications
  - Easier to catch errors and handle failures
  - Well documented
- Cons:
  - Not very suitable for simple apps
  - More boilerplate code than other middleware
  - Need to have the knowledge of generators
  - Higher learning curve than other middleware

3. Promise-based Middleware
4. Async/Await Middleware

- Out of the above, first 2 are more popular middlewares

# Module Summary

- Hooks provide a way to use functionalities such as context or state, without classes.
- Inputs in React can be one of two types: controlled or uncontrolled.
- Redux is a state management library that is often used with React to handle the state of your application.
- The Redux elements that are involved in updating the component properties are action, store, and reducer.
- You can interact with asynchronous data in your React Redux app using middleware.
- The data flow in the React-Redux application is unidirectional.

# Notes:

- [React Naming Conventions](https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/)
- All Component names in React (either Class or Functional) have to start with an `Uppercase Character`
