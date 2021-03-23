`#react.js-basics` `#assembler-school` `#master-in-software-engineering`

# Assembler School: React.js Basics Workshop <!-- omit in toc -->

In this workshop you will learn all the basics concepts of working with a React.js app.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Workshop Material](#workshop-material)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [React Basics Part I](#react-basics-part-i)
- [What is React?](#what-is-react)
- [Why use react?](#why-use-react)
- [Creating a React App](#creating-a-react-app)
- [JSX](#jsx)
- [Specifying Attributes with JSX](#specifying-attributes-with-jsx)
- [Specifying Children with JSX](#specifying-children-with-jsx)
- [Render](#render)
- [Components and Props](#components-and-props)
- [What are props?](#what-are-props)
- [State](#state)
- [Lifecycle Methods](#lifecycle-methods)
- [React Basics Part II](#react-basics-part-ii)
- [Using State Correctly](#using-state-correctly)
- [The Data Flows Down](#the-data-flows-down)
- [Handling Events](#handling-events)
- [Conditional Rendering](#conditional-rendering)
- [Element Variables](#element-variables)
- [Lists & Keys](#lists--keys)
- [Fragments](#fragments)
- [Forms](#forms)
- [Lifting State Up](#lifting-state-up)
- [Context](#context)
- [Learn More About Create React App](#learn-more-about-create-react-app)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-basics-workshop.git
```

## Workshop Material

- [React Basics Part I Slides](https://docs.google.com/presentation/d/1IKitL5KiVZdtcGW6dOlcCgkMPR-dbjEQFR3pb3TMbag/edit#slide=id.g971ae63461_0_1034)

- [React Basics Part II Slides](https://docs.google.com/presentation/d/1wkmi-zKKg5Bu5A_VDYK_mu251AmxA84yhxivsdXO0h4/edit)

## Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents and exercises of each section.

The branches follow a naming strategy like the following:

- `{NN}-exercise`: includes the main contents and the instructions of the exercises
- `{NN}-exercise-solution`: includes the solution of the exercises

### Fetching All the Branches

In order to fetch all the remote branches in the repository you can use the following command:

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## React Basics Part I

## What is React?

React is a JavaScript library for building user interfaces. It is an open-source, component-based, front-end library responsible only for the application’s view layer.

React is the most popular front-end JavaScript library in the field of web development. It was created by Jordan Walke, a software engineer at Facebook.

### Instagram Made With React.js

Let’s take a look at an Instagram webpage example, entirely built using React, to get a better understanding of how React works.

<img src='src/img/react-components-intro.png'>

As the illustration shows, with React we divide the UI into multiple components, which makes the code easier to debug. This way, each component has its property and function.

This would be an example of what that would look like in `JSX`

```jsx
function App() {
  return (
    <div className="App">
      <Search />
      <ProfileDescription />
      <Stories />
      <SinglePost />
      <PostList />
    </div>
  );
}
```

## Why use react?

Now that we know what React is, let’s move on and see why React is the most popular front-end library for web application development.

#### ✅ Improved Performance

React uses a Virtual DOM and compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do.

#### ✅ Reusable Components

Components can be reused throughout the application, which in turn dramatically reduces the application’s development time.

#### ✅ Unidirectional Data Flow

When designing a React app, developers often nest child components within parent components and it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.

#### ✅ Small Learning Curve

It can be used for the development of both web and mobile apps: There is a framework called React Native, derived from React itself, that is used for creating beautiful mobile applications.

#### ✅ Dedicated Tools for Easy Debugging

React also has a Chrome extension that can be used to debug React applications.

## Creating a React App

To start using React we only need to install the official Create React App package.

However this project was already bootstrapped with it so you can try it out in a different folder on your computer.

```sh
npm i -g create-react-app
```

Command to build a react app from scratch after we have installed it:

```sh
create-react-app myapp
```

### Folder Structure

This is a sample folder structure that the `create-react-app` cli tool creates. This is the most common folder structure of a React app, although you can modify it if you need to.

```sh
.
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```

#### `/public`

`/public` is where your static files reside. If the file is not imported by your JavaScript application and must maintain its file name, put it here.

Files in the public directory will maintain the same file name in production, which typically means that they will be cached by your client and never downloaded again.

```sh
public
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

#### `/src`

`/src` is where your dynamic files reside. If the file is imported by your JavaScript application or changes contents, put it here.

> ⚠️ The fields listed bellow are the ones that the base Create React App cli tool installs by default, some of them are removed in this repo because we don't need them.

```sh
src
├── App.js
├── App.css
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
├── reportWebVitals.js
└── setupTests.js
```

## JSX

JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. This makes the code easier to understand and debug, as it avoids the usage of complex JavaScript DOM structures.

JSX Example:

```jsx
function App() {
  const fullName = "Josh Perez";

  const element = <h1>Hello, {fullName}</h1>;

  return element;
}
```

```jsx
function App() {
  return <PostList />;
}

function PostList() {
  const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
  ];

  return posts.map((el) => <div key={el.id}>{el.title}</div>);
}
```

## Specifying Attributes with JSX

- You can use quotes to specify string literals as attributes.
- You can also use curly braces to embed a JavaScript expression in an attribute.

```jsx
function App() {
  return <Button id="1" />;
}

function Button(props) {
  return <button id={props.id}>Click id: {props.id}</button>;
}
```

## Specifying Children with JSX

We can also use the `children` prop to render child elements of a component.

```jsx
function App() {
  function handleClick(event) {
    console.log(event.target);
  }
  return <Button handleClick={handleClick}>Click Me</Button>;
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}
```

## Render

The `render()` method is used to convert JSX code is to regular JavaScript at runtime. After translation, JSX code looks like this:

```jsx
const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

### Updating the Rendered Element

React elements are **immutable**. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => (prevCount += 1));
  }
  return <Button handleClick={handleClick} count={count} />;
}

function Button(props) {
  return (
    <div>
      <p className="button" aria-label="increment">
        {props.count}
      </p>
      <button onClick={props.handleClick}>Increment</button>
    </div>
  );
}

export default App;
```

### React Only Updates What’s Necessary

After looking at the workshop demo we can see that React DOM compares the element and its children to the previous one, and **only applies the DOM updates necessary** to bring the DOM to the desired state.

## Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

The simplest way to define a component is to write a JavaScript function:

```jsx
import React from "react";

function App() {
  return (
    <div>
      <Welcome name="developer" />
      <SecondWelcome name="developer" />
    </div>
  );
}

// Using a functional component
function Welcome(props) {
  // Notice that a functional component should have a return statement
  return <h3>Hello {props.name}</h3>;
}

// Or a class component
class SecondWelcome extends React.Component {
  // Notice that class components should have a render method
  render() {
    return <h1>Hello {this.props.name} from a class</h1>;
  }
}

export default App;
```

## What are props?

React is a **component-based library** which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.

`props` is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Welcome name="Assembler" />
    </div>
  );
}

export default App;
```

### Extracting Components

Don’t be afraid to split components into smaller components.
For example, consider this App component:

```jsx
import React from "react";
import img from "./img/react-components-intro.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello Assembler</h1>
      <div>
        <img src={img} />
        <div>
          <p>Code your future!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
```

Let’s extract a few components from `<App />` component.

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.

```jsx
function Welcome(props) {
  return <h3>Hello {props.name}</h3>;
}

function AssemblerLogo(props) {
  return <img src={props.img} />;
}

function AssemblerText(props) {
  return <p>Code your future!</p>;
}
```

Now we can render the components in our `<App />` component.

```jsx
import React from "react";
import img from "./img/react-components-intro.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome name="developer" />
      <div>
        <AssemblerLogo img={img} />
        <div>
          <AssemblerText />
        </div>
      </div>
    </div>
  );
}

function Welcome(props) {
  return <h3>Hello {props.name}</h3>;
}

function AssemblerLogo(props) {
  return <img src={props.img} />;
}

function AssemblerText() {
  return <p>Code your future!</p>;
}

export default App;
```

## State

Like props, state holds information about the component. However, the kind of information and how it is handled is different.

By default, a component has no state. The Welcome component from the example is stateless:

### So when would you use state?

Like props, state holds information about the component. However, the kind of information and how it is handled is different.

### Stateless Component

By default, a component has no state. The Welcome component from the example is stateless:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

### So When Would You Use State?

When a component needs to keep track of information between renderings the component itself can create, update, and use state.

We’ll be working with a fairly simple component to see `state` working in action.

#### Modifying the State

Changing the state should only be done from inside a component through the method `this.setState()`.

React exposes setState on the component instance to update it so that react finds out data change and can re-render the view.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hi",
      counter: 2,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

## Lifecycle Methods

React components have several lifecycle methods which you can monitor and manipulate during its three main phases.

The three phases are: **Mounting**, **Updating**, and **Unmounting**.

### Mounting

Mounting means putting elements into the DOM. React has several built-in methods that gets called, in this order, when mounting a component, but these are the common ones:

- `constructor()`
- `render()`
- `componentDidMount()`

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

### `constructor()`

The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}
```

### `render()`

The `render()` method is always required, and is the method that actually outputs the HTML to the DOM.

```jsx
class Example extends React.Component {
  render() {
    return <h1>hello-mundo</h1>;
  }
}
```

### `componentDidMount`

The `componentDidMount()` method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

```jsx
class Example extends React.Component {
  render() {
    return <h1>hello-mundo</h1>;
  }
}
```

At first my favorite color is red, but give me a second, and it is yellow instead:

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}
```

### Updating

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.

React calls the following methods, in this order, when a component is updated:

- `render()`
- `componentDidUpdate()`

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("The updated favorite is " + this.state.favoriteColor);
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}
```

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

- `componentWillUnmount()`

```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };

    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.setState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Delete Example</button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("Example component is about to be unmounted.");
  }
  render() {
    return <h1>Hello Assembler!</h1>;
  }
}
```

## React Basics Part II

## Using State Correctly

There are three things you should know about `setState()`.

### 1. Do Not Modify State Directly

For example, this will not re-render a component. The only place where you can assign `this.state` is the constructor.

```jsx
// Wrong
this.state.comment = "Hello";

// Instead, use setState():

// Correct
this.setState({ comment: "Hello" });
```

### 2. State Updates May Be Asynchronous

React may batch multiple `setState()` calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

#### Wrong Way to Update State

For example, this code may fail to update the counter:

```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.count + 1,
    });
    this.setState({
      count: this.count + 1,
    });
    this.setState({
      count: this.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
```

Even though we have 3 calls to `setState()` the counter is only incremented once.

#### Wright Way to Update State

To fix it, we need to use the second form of calling `setState()` that accepts a function rather than an object.

```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
```

Now the `state.count` property is incremented by 3 each time.

### 3. State Updates are Merged

When you call `setState()`, React merges the object you provide into the current state. For example, your state may contain several independent variables:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "dani",
        email: "dani@mail.com",
      },
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}
```

## The Data Flows Down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components.

The `<FormattedDate />` component would receive the date in its props and wouldn’t know whether it came from the `<Clock />`’s state, its props, or it was typed by hand:

```jsx
// passing the data as props
<FormattedDate date={this.state.date} />;

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

## Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

```jsx
// HTML form
<button onclick="activateLasers()">
    Activate Lasers
</button>

// React form
<button onClick={activateLasers}>
    Activate Lasers
</button>
```

### Binding `this` In the `constructor()`

Make `this` available in the `shoot` function by binding it in the `constructor()`:

```jsx
class Football extends React.Component {
  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }

  shoot() {
    console.log(this);
    /*
      Thanks to the binding in the constructor function,
      the 'this' keyword now refers to the component object
    */
  }

  render() {
    return <button onClick={this.shoot}>Take the shot!</button>;
  }
}
```

### Passing Arguments

If you want to send parameters into an event handler, you can use the following solution.

Make an anonymous arrow function and send `Goal` as a parameter to the `shoot` function, using a function:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello(person) {
    console.log(`Hello ${person}`);
  }

  render() {
    return <button onClick={() => this.sayHello("dani")}>Say Hello!</button>;
  }
}
```

## Conditional Rendering

In React, you can create distinct components that encapsulate the behavior you need. Then, you can render only some of them, depending on the state of your application.

Consider these two components:

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

We’ll create a `<Greeting />` component that displays either of these components depending on whether a user is logged in:

```jsx
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleIsLoggedIn() {
    setIsLoggedIn((loggedIn) => !loggedIn);
  }

  return (
    <Greeting isLoggedIn={isLoggedIn} toggleIsLoggedIn={toggleIsLoggedIn} />
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <button onClick={props.toggleIsLoggedIn}>Toggle Is Logged In</button>
      {isLoggedIn ? <UserGreeting userName="dani" /> : <GuestGreeting />}
    </div>
  );
}

function UserGreeting(props) {
  return <h1> Hello {props.userName}!</h1>;
}

function GuestGreeting() {
  return <h1> Hello Guest!</h1>;
}

export default App;
```

## Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

Consider these two new components representing `<Logout />` and `<Login />` buttons:

```jsx
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
```

In the example below, we will create a stateful component called `<LoginControl />`.

It will render either `<LoginButton />` or `<LogoutButton />` depending on its current state. It will also render a `<Greeting />` from the previous example:

```jsx
import React from "react";

function App() {
  return <LoginControl />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? <UserGreeting userName="dani" /> : <GuestGreeting />}
    </div>
  );
}

function UserGreeting(props) {
  return <h1> Hello {props.userName}!</h1>;
}

function GuestGreeting() {
  return <h1> Hello Guest!</h1>;
}

export default App;
```

While declaring a variable and using an `if` statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax.

There are a few ways to inline conditions in JSX, explained below.

### Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.

In the example below, we use it to conditionally render the same example as before.

```jsx
{
  isLoggedIn ? (
    <LogoutButton onClick={this.handleLogoutClick} />
  ) : (
    <LoginButton onClick={this.handleLoginClick} />
  );
}
```

## Lists & Keys

### Lists

Below, we loop through the numbers array using the JavaScript `map()` function. We
return an `<li>` element for each item.

Finally, we assign the resulting array of elements to `listItems`:

```jsx
function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </div>
  );
}
```

However, if we render these elements we will get the following error in the console:

```js
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at App
...
```

### Keys

To solve this issue we can use keys. Keys help React identify which items have changed (**added/removed/re-ordered**). To give a unique identity to every element inside the array, a key is required.

Keys only have to be unique between each other, not in the entire app.

```jsx
const posts = [
  { id: 1, title: "Hello Assembler", content: "Welcome to Assembler!" },
  { id: 2, title: "Installation", content: "  Install React from npm." },
];

function App() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <li>{post.title}</li>
        </div>
      ))}
    </div>
  );
}
```

## Fragments

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```jsx
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>Home</span>
        <span>About</span>
        <span>Login</span>
      </React.Fragment>
    );
  }
}
```

If we inspect the rendered html, this is how it would look using react fragment, as we see the spans appear as direct children of the `#root` element.

```html
<div id="root">
  <span>Home</span>
  <span>About</span>
  <span>Login</span>
</div>
```

#### Without Fragments

This is how it would look without using react fragment, as we see the spans appear as the `#root` grandchildren.

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Login</span>
      </div>
    );
  }
}
```

```html
<div id="root">
  <div>
    <span>Home</span>
    <span>About</span>
    <span>Login</span>
  </div>
</div>
```

### Shorthand Syntax

There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags. You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

```jsx
class App extends React.Component {
  render() {
    return (
      <>
        <span>Home</span>
        <span>About</span>
        <span>Login</span>
      </>
    );
  }
}
```

```html
<div id="root">
  <span>Home</span>
  <span>About</span>
  <span>Login</span>
</div>
```

## Forms

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.

But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

### Adding Forms in React

You add a form with React like any other element.
In this case, we add a form that allows users to enter their name:

```jsx
class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type="text" />
      </form>
    );
  }
}
```

### Handling Forms in React

You can control changes by adding event handlers in the `onChange` attribute. In this case, we add an event handler in the `onChange` attribute, and let the event handler update the state object:

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };

    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <label>
          Enter your name:
          <input
            type="text"
            value={this.state.username}
            onChange={this.myChangeHandler}
          />
        </label>
      </form>
    );
  }
}
```

## Lifting State Up

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

```jsx
import React from "react";

function CurrentCount(props) {
  return <h1>Current count is: {props.count}</h1>;
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.message}</button>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <CurrentCount count={this.state.count} />
        <Button handleClick={this.increment} message="Increment count" />
        <Button handleClick={this.decrement} message="Decrement count" />
      </div>
    );
  }
}

export default App;
```

## Context

React Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.

React Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

### When to Use React Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

### Prop Drilling 😢

One of the main benefits of using React Context is that it allows us to solve what is known as **Prop Drilling**.

For this part, copy the following code in the `<App />` component and render the `<PropDrilling />` component:

```jsx
import React from "react";

import { posts } from "./utils/posts";

import PropDrilling from "./components/PropDrilling/PropDrilling";
import UsingContext from "./components/UsingContext/UsingContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en",
    };

    this.toggleLocale = this.toggleLocale.bind(this);
  }

  toggleLocale() {
    this.setState((prevState) => {
      if (prevState.locale === "en") {
        return {
          locale: "es",
        };
      }

      return {
        locale: "en",
      };
    });
  }

  render() {
    const { locale } = this.state;

    return (
      <>
        <PropDrilling
          toggleLocale={this.toggleLocale}
          locale={locale}
          posts={posts}
        />
      </>
    );
  }
}

export default App;
```

### Avoiding Prop Drilling With React Context

In order to solve this issue we can use React Context to provide all the data that our child components need from a common parent component.

For this part render the `<UsingContext />` component:

```jsx
import React from "react";

import { posts } from "./utils/posts";

import PropDrilling from "./components/PropDrilling/PropDrilling";
import UsingContext from "./components/UsingContext/UsingContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en",
    };

    this.toggleLocale = this.toggleLocale.bind(this);
  }

  toggleLocale() {
    this.setState((prevState) => {
      if (prevState.locale === "en") {
        return {
          locale: "es",
        };
      }

      return {
        locale: "en",
      };
    });
  }

  render() {
    const { locale } = this.state;

    return (
      <>
        <UsingContext
          toggleLocale={this.toggleLocale}
          locale={locale}
          posts={posts}
        />
      </>
    );
  }
}

export default App;
```

### Creating a Context

The easiest way to create a context is one without any default value:

```jsx
// src/components/UsingContext/context/PostsContext.js
const PostsContext = React.createContext();
```

### Assigning a Default Value to the Context

You can define a default value if the provider does not have a value assigned or if it does not find a `Context.Provider` in the parent elements. If the consumer does not find a provider, it will use this default value. We can create a context with a default value as follows:

```jsx
// src/components/UsingContext/context/PostsContext.js
const PostsContext = React.createContext({
  posts: [],
});
```

### Using the Context.Provider

Using context, we can avoid passing props through intermediate elements. It lets us pass a value deep into the component tree without explicitly threading it through every component.

For this, we use a `Context.Provider` to pass the it to the tree below. Then, any component can read it, no matter how deep it is. The value is where you have to put the data that will be passed, if you don't put anything it will put the default value.

### Using the Context.Consumer

Every `Context` object comes with a Consumer React component that allows components to subscribe to context changes.

```jsx
import React from "react";

import Post from "../Post/Post";
import { PostsContext } from "../context/PostsContext";

function Posts() {
  return (
    <section className="row row-cols-1">
      <PostsContext.Consumer>
        {(posts) =>
          posts.map((post) => (
            <div className="col" key={post.id}>
              <Post post={post} />
            </div>
          ))
        }
      </PostsContext.Consumer>
    </section>
  );
}

export default Posts;
```

### Using Multiple Contexts

We create another context as follows:

```jsx
// src/components/UsingContext/context/LocaleContext.js
const LocaleContext = React.createContext({
  locale: "en",
});
```

Then, we can assign values to each `Context.Provider`.

```jsx
// src/components/UsingContext/UsingContext.js
import React from "react";

import { PostsContext } from "./context/PostsContext";
import { LocaleContext } from "./context/LocaleContext";

...

function UsingContext({ toggleLocale, locale, posts }) {
  return (
    <div className="container mt-5">
      ...
      <LocaleContext.Provider value={locale}>
        <PostsContext.Provider value={posts}>
          <Main />
        </PostsContext.Provider>
      </LocaleContext.Provider>
    </div>
  );
}

export default UsingContext;
```

Then, to consume the value of each `Context.Provider` we can do it in the components that need the data.

```jsx
import React from "react";

import Post from "../Post/Post";
import { PostsContext } from "../context/PostsContext";
import { LocaleContext } from "../context/LocaleContext";

function Posts() {
  return (
    <section className="row row-cols-1">
      <LocaleContext.Consumer>
        {(locale) => (
          <PostsContext.Consumer>
            {(posts) =>
              posts.map((post) => (
                <div className="col" key={post.id}>
                  <Post locale={locale} post={post} />
                </div>
              ))
            }
          </PostsContext.Consumer>
        )}
      </LocaleContext.Consumer>
    </section>
  );
}

export default Posts;
```

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
