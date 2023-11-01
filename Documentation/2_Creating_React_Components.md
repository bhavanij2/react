# Create React Components

Here is the completed solution code for the App.js file:

```
function Heading() {
  return (
    <h1>This is an h1 heading.</h1>
  )
}

function App() {
  return (
    <div className="App">
      This is the starting code for "Your first component" ungraded lab
      <Heading />
    </div>
  );
}

export default App;
```

The output of the completed 'Your first component' exercise.

**Step 1:** In the starting code, you already had a JSX element named <Heading /> , being rendered from the App component, since it is a part of the App component's return statement.

```
function App() {
return (

<div className="App">
This is the starting code for "Your first component" ungraded lab
<Heading />
</div>
);
}

export default App;
```

Then, you added a new function to the App component, and named that function `Heading ()`. You placed it at the very top of the `App.js` file.

```
function Heading() {
}
```

**Step 2:** Next, in the body of the Heading component, you added a return statement and spread it over several lines by following it up with an opening and a closing parenthesis.

```
function Heading() {
return (
)
}
```

**Step 3:** Then, inside the parentheses, you added the following code: `<h1>This is an h1 heading</h1>`

```
function Heading() {
  return (
    <h1>This is an h1 heading.</h1>
  )
}
```

Step 4: Finally, you saved your changes and viewed the app in the browser.
