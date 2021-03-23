`#react-hooks` `#assembler-school` `#master-in-software-engineering`

# Assembler School: React.js Hooks Workshop <!-- omit in toc -->

In this workshop you will learn all about React Hooks.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [React Hooks](#react-hooks)
- [Before We Get Started](#before-we-get-started)
- [`useState()`](#usestate)
- [`useEffect()`](#useeffect)
- [Using Multiple State Variables](#using-multiple-state-variables)
- [Rules of Hooks](#rules-of-hooks)
- [Building Your Own Hooks](#building-your-own-hooks)
- [`useRef()`](#useref)
- [`useContext()`](#usecontext)
- [`useReducer()`](#usereducer)
- [Learn More About Create React App](#learn-more-about-create-react-app)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-hooks-workshop.git
```

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

## React Hooks

### What are React Hooks?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

## Before We Get Started

Make sure to read the official [reactjs.org docs](https://reactjs.org/docs/hooks-faq.html) once we are done with the workshop.

### _Do I need to rewrite all my class components?_ [[1]](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

_No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. **We recommend trying Hooks in new code**._

### _Should I use Hooks, classes, or a mix of both?_ [[2]](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

_You can’t use Hooks inside a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component. **In the longer term, we expect Hooks to be the primary way people write React components**._

## `useState()`

The `useState()` hook was introduced to replace classes that needed to have state, also known as stateful components.

It allows us to add state in functional components. Instead of setting an initial state with the `this.state` statement in the `constructor()`, we can `import { useState } from react`, which will allow us to set the initial state as an argument.

If we have the following class component:

```jsx
// src/components/workshop/Counter.js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h1>Current count: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
```

We can convert it to a hook in the following way:

```jsx
// src/components/workshop/FunctionalCounter.js
import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default FunctionalCounter;
```

### Functional Updates

If the new state is computed using the previous state, we need need to pass a function to `setState`. The function will receive the previous value, and return an updated value.

This way, we can solve the same issue we had with classes when we wanted to update the state multiple times at once.

This is because React might batch multiple `setState()` calls into one and they will all use a different version of the current state.

If we try the following code we can see that it state value is incremented by 1 each time instead of by 3 as we expected.

```jsx
// src/components/workshop/FunctionalCounter.js
import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // this doesn't work as expected
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment by 3</button>
    </div>
  );
}

export default FunctionalCounter;
```

In order to solve this issue we need to use the functional `setState` of the call to update state.

```jsx
// src/components/workshop/FunctionalCounter.js
import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // this doesn't work as expected
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment by 3</button>
    </div>
  );
}

export default FunctionalCounter;
```

### When Using Hooks Objects Are Not Combined

Unlike the `setState()` method found in class components, state hooks don't automatically merge objects.

If we try to work with the following component:

```jsx
// src/components/workshop/ObjectMergesBug.js
import React, { useState } from "react";
import FormGroup from "./FormGroup";

function ObjectMergesBug() {
  const [userData, setUserData] = useState({
    firstName: "dani",
    lastName: "assembler",
    email: "dani@mail.com",
  });

  // this doesn't work as expected ⚠️
  function handleFirstNameChange(event) {
    setUserData({
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setUserData({
      lastName: event.target.value,
    });
  }

  function handleEmailChange(event) {
    setUserData({
      email: event.target.value,
    });
  }

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Current user</h1>
          <code>{JSON.stringify(userData, null, 2)}</code>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
        <div className="row-cols-1">
          <FormGroup
            inputValue={userData.firstName || "BUG"}
            handleInputChange={handleFirstNameChange}
            inputName="firstName"
            inputId="firstName"
            labelText="First Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.lastName || "BUG"}
            handleInputChange={handleLastNameChange}
            inputName="lastName"
            inputId="lastName"
            labelText="Last Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.email || "BUG"}
            handleInputChange={handleEmailChange}
            inputName="email"
            inputId="email"
            labelText="Email"
            inputType="email"
          />
        </div>
      </div>
    </div>
  );
}

export default ObjectMergesBug;
```

We can see that the state updates are not merged and that the object is not combined with the previous values.

In order to fix this issue we need to use the functional update form of calling `setState()` and use the `...spread` operator to include the previous values.

```jsx
// src/components/workshop/ObjectMergesFixed.js
import React, { useState } from "react";
import FormGroup from "./FormGroup";

function ObjectMergesFixed() {
  const [userData, setUserData] = useState({
    firstName: "dani",
    lastName: "assembler",
    email: "dani@mail.com",
  });

  function handleInputChanges(event) {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // this now works as expected 💯
  function handleFirstNameChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      firstName: event.target.value,
    }));
  }

  function handleLastNameChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      lastName: event.target.value,
    }));
  }

  function handleEmailChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  }

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Current user</h1>
          <code>{JSON.stringify(userData, null, 2)}</code>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
        <div className="row-cols-1">
          <FormGroup
            inputValue={userData.firstName}
            handleInputChange={handleFirstNameChange}
            inputName="firstName"
            inputId="firstName"
            labelText="First Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.lastName}
            handleInputChange={handleLastNameChange}
            inputName="lastName"
            inputId="lastName"
            labelText="Last Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.email}
            handleInputChange={handleEmailChange}
            inputName="email"
            inputId="email"
            labelText="Email"
            inputType="email"
          />
        </div>
      </div>
    </div>
  );
}

export default ObjectMergesFixed;
```

Furthermore, we can use the following code to update properties of the form dynamically based on the `name` attribute of the input element.

```jsx
function handleInputChanges(event) {
  console.log(event.target);

  setUserData((prevData) => ({
    ...prevData,
    [event.target.name]: event.target.value,
  }));
}
```

## `useEffect()`

The `useEffect` hook will get invoked when the DOM is first mounted and when it is updated. We can pass in a callback function as an argument, and every time the DOM gets updated and after the first mount, the callback will get invoked too.

Also, the effect hook allows us to pass in an array as the second argument, which contains all the dependencies that will trigger the effect hook. If any of the dependencies change, the effect hook will run again.

Instead of executing the hook with every DOM update, you can pass in the dependencies that will cause the hook to execute only when they have changed.

### Converting `componentDidMount()` to Hooks

The equivalent of using `componentDidMount()` in hooks is the `useEffect` hook.

Here we can see an example written with classes:

```jsx
// src/components/workshop/ComponentDidMountToHooks.js
import React, { Component } from "react";

class ComponentDidMountToHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("The counter component has been mounted");
  }

  render() {
    return (
      <div>
        <h1>hello-mundo</h1>
      </div>
    );
  }
}

export default ComponentDidMountToHooks;
```

That can be converted to hooks in the following way:

```jsx
// src/components/workshop/ComponentDidMountToHooks.js
import React, { useEffect } from "react";

function ComponentDidMountToHooks() {
  useEffect(() => {
    console.log("The counter component has been mounted");
  }, []);

  return (
    <div>
      <h1>hello-mundo</h1>
    </div>
  );
}

export default ComponentDidMountToHooks;
```

### Converting `componentDidUpdate()` to Hooks

The equivalent of using `componentDidUpdate()` in hooks is also the `useEffect` hook.

Here we can see an example written with classes:

```jsx
// src/components/workshop/ComponentDidUpdateToHooks.js
import React, { Component } from "react";

class ComponentDidUpdateToHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  componentDidUpdate() {
    console.log("The counter component has been updated");
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Current count: {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default ComponentDidUpdateToHooks;
```

That can be converted to hooks to fire after every change.

In this example, the hook will be executed **when the dependency in the `useEffect()` array changes**.

```jsx
// src/components/workshop/ComponentDidMountToHooks.js
import React, { useState, useEffect } from "react";

function ComponentDidUpdateToHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The counter component has been updated");
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default ComponentDidMountToHooks;
```

In this example, the hook will be executed with **the first mount** of the component **and** when the dependency in the `useEffect()` array changes.

```jsx
// src/components/workshop/ComponentDidMountToHooks.js
import React, { useState, useEffect } from "react";

function ComponentDidUpdateToHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The counter component has been updated");
  };

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default ComponentDidMountToHooks;
```

```jsx
function Counter(props) {
  const [counter, setCounter] = useState(0);

  // same as componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("The counter component has been updated");
    // this will always execute because it has no dependencies
  });

  // same as componentDidMount
  // this will only execute once
  useEffect(() => {
    console.log("The counter component has been mounted");
    // because it has an empty array of dependencies
  }, []);

  return null;
}
```

### Converting `componentWillUnmount()` to Hooks

The equivalent of using `componentWillUnmount()` in hooks is also the `useEffect` hook. However, in this case the callback should return a function that **is called when the component is unmounted**.

Here we can see an example written with classes:

```jsx
// src/components/workshop/ComponentWillUnmountToHooks.js
import React, { Component, useState, useEffect } from "react";

class Child extends Component {
  componentWillUnmount() {
    console.log("Goodbye!");
  }

  render() {
    return <h1 className="h3">Hola</h1>;
  }
}

function ComponentWillUnmountToHooks() {
  const [mounted, setMounted] = useState(true);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setMounted((mounted) => !mounted)}
            className="btn btn-primary"
          >
            Toggle
          </button>
          {mounted ? (
            <code className="ml-3">isMounted</code>
          ) : (
            <code className="ml-3">notMounted</code>
          )}
        </div>
        <div className="col">
          <hr />
        </div>
        {mounted ? (
          <div className="col">
            <Child />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ComponentWillUnmountToHooks;
```

The `<Child />` component can be converted to hooks using the following code:

```jsx
// src/components/workshop/ComponentWillUnmountToHooks.js
import React, { Component, useState, useEffect } from "react";

function Child() {
  useEffect(() => {
    return () => {
      console.log("Goodbye!");
    };
  }, []);

  return <h1 className="h3">Hola</h1>;
}

// same as before
function ComponentWillUnmountToHooks() {
  const [mounted, setMounted] = useState(true);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setMounted((mounted) => !mounted)}
            className="btn btn-primary"
          >
            Toggle
          </button>
          {mounted ? (
            <code className="ml-3">isMounted</code>
          ) : (
            <code className="ml-3">notMounted</code>
          )}
        </div>
        <div className="col">
          <hr />
        </div>
        {mounted ? (
          <div className="col">
            <Child />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ComponentWillUnmountToHooks;
```

### Why Do We Need To Execute a Function When The Component is Unmounted?

Consider this following example from the React docs:

```jsx
function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

In this case, it's very important that we unsuscribe from the ChatAPI when the component is unmounted **to avoid memory leaks**.

## Using Multiple State Variables

Declaring state variables as a pair of `[something, setSomething]` is also handy because it lets us give different names to different state variables if we want to use more than one.

```jsx
// src/components/workshop/MultipleStateValues.js
import React, { useState } from "react";

import FormGroup from "./FormGroup";

function MultipleStateValues() {
  const [mounted, setMounted] = useState(true);
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  function increment() {
    setCount(count + 1);
  }

  function setUserName(event) {
    setUserData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  }

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setMounted((mounted) => !mounted)}
            className="btn btn-primary"
          >
            Toggle
          </button>
          {mounted ? (
            <code className="ml-3">isMounted</code>
          ) : (
            <code className="ml-3">notMounted</code>
          )}
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col mb-3">
          <button onClick={increment} className="btn btn-primary">
            Increment
          </button>
          <code className="ml-3">{count}</code>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col mb-3">
          <FormGroup
            inputValue={userData.name}
            handleInputChange={setUserName}
            inputName="name"
            inputId="name"
            labelText="First Name"
            inputType="text"
          />
          <code className="ml-3">{JSON.stringify(userData, null, 2)}</code>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default MultipleStateValues;
```

## Rules of Hooks

---

[💯 Learn more about all the _Rules of Hooks_](https://reactjs.org/docs/hooks-rules.html)

---

### ⚠️ Only Call Hooks at the Top Level

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.

By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

### ⚠️ Only Call Hooks from React Functions

Don’t call Hooks from regular JavaScript functions. Instead, you can:

- ✅ Call Hooks from React function components.
- ✅ Call Hooks from custom Hooks.

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

### ESLint Plugin

The React team released an ESLint plugin called `eslint-plugin-react-hooks` that enforces these two rules. You can add this plugin to your project if you’d like to try it:

> This plugin is included by default in Create React App.

## Building Your Own Hooks

Let's say that we have to build a component that on every click increases the count and updates the title of the page with the count value using hooks.

```jsx
// src/components/workshop/CounterHook/Counter.js
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  }, [count]);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button onClick={increment} className="btn btn-primary">
            Increment
          </button>
          <code className="ml-3">{count}</code>
        </div>
      </div>
    </div>
  );
}

export default Counter;
```

One way we can improve the previous code is that we can extract the `useEffect()` hook into a custom one that we can reuse throughout our app.

#### `useDocumentTitle()`

```jsx
// src/components/workshop/CounterHook/useDocumentTitle.js
import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `You clicked ${count} times 🎉`;
  }, [count]);
}

export default useDocumentTitle;
```

```jsx
// src/components/workshop/CounterHook/Counter.js
import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  const increment = () => setCount(count + 1);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button onClick={increment} className="btn btn-primary">
            Increment
          </button>
          <code className="ml-3">{count}</code>
        </div>
      </div>
    </div>
  );
}

export default Counter;
```

### Key Points

We can create as many custom hooks that we want, we just need to keep in mind a simple rule:

Always name the custom hook with: `useX`

```jsx
useDocumentTitle();
useCount();
usePreviousValue();
useIsMounted();
useEtc();
```

Here we can see a great resource of community made custom hooks:

- [usehooks.com](https://usehooks.com/)

## `useRef()`

The `useRef()` hook allows us to store a value that doesn't change across renders.

This is usually used to store references to HTML elements.

Refs have a `.curent` property that stores the value that we have assigned to it.

In this example we use `nodeRef.current.focus()` to focus the input element when component is mounted.

```jsx
// src/components/workshop/RefHook.js
import React, { useRef, useEffect, useState } from "react";

function RefHook() {
  const [email, setEmail] = useState("");
  const nodeRef = useRef();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    // we check if the nodeRef is set first
    // if the dom element is mounted dynamically it might not be
    if (nodeRef.current) {
      nodeRef.current.focus();
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Please enter your email</h1>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            placeholder="Enter your email"
            ref={nodeRef}
          />
        </div>
      </div>
    </div>
  );
}

export default RefHook;
```

If the DOM element is mounted dynamically we can also get access to it using the following method:

```jsx
// src/components/workshop/DynamicRefHook.js
import React, { useCallback, useEffect, useState } from "react";

function DynamicRefHook() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const [node, setNode] = useState(null);

  const nodeRefCb = useCallback((element) => {
    if (element) {
      setNode(element);
    }
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    // we check if the nodeRef is set first
    // if the dom element is mounted dynamically it might not be
    if (node) {
      node.focus();
    }
  }, [node]);

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Please enter your email</h1>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setOpen((isOpen) => !isOpen)}
            className="btn btn-primary"
          >
            Toggle form
          </button>
        </div>
        {open && (
          <div className="col form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              id="email"
              placeholder="Enter your email"
              ref={nodeRefCb}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicRefHook;
```

## `useContext()`

As we have seen in the previous [workshop](https://github.com/assembler-school/react-basics-workshop#context) using the React.Context API we can inject state and methods deep inside a component tree without having to enter into [prop-drilling](https://kentcdodds.com/blog/prop-drilling/).

In that example we have a `<Posts />` component that requires values from different context providers. To get the values it uses Render Props from the `XProvider.Consumer` component.

However, this can get pretty difficult to read quickly.

```jsx
// src/components/workshop/UsingContext/Posts/Posts.js
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

One way to solve this issue is to use the `useContext()` hook which greatly simplifies using different context providers.

```jsx
// src/components/workshop/UsingContext/Posts/Posts.js
import React, { useContext } from "react";

import Post from "../Post/Post";
import { PostsContext } from "../context/PostsContext";
import { LocaleContext } from "../context/LocaleContext";

function Posts() {
  const locale = useContext(LocaleContext);
  const posts = useContext(PostsContext);

  return (
    <section className="row row-cols-1">
      {posts.map((post) => (
        <div className="col" key={post.id}>
          <Post locale={locale} post={post} />
        </div>
      ))}
    </section>
  );
}

export default Posts;
```

Now everything is much simpler and easier to read.

One important thing to consider it how we need to use the hook:

**✅ Wright way to use the context hook**

```jsx
const locale = useContext(LocaleContext);
const posts = useContext(PostsContext);
```

---

**⚠️ Wrong way to use the context hook**

```jsx
const locale = useContext(LocaleContext.Provider);
const posts = useContext(PostsContext.Provider);
```

This way is also wrong:

```jsx
const locale = useContext(LocaleContext.Consumer);
const posts = useContext(PostsContext.Consumer);
```

---

## `useReducer()`

`useReducer()` is one of a handful of React hooks that shipped in React 16.8.0. It accepts a reducer function and the application’s initial state and then it returns the current application state and a dispatch function that we can execute to dispatch actions to update the state of our app.

It’s an alternative to `useState()`. It is recommended to use it instead of `useState()` when we have many different state variables that we need to update at the same time.

It accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a dispatch method.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Before we move on to see how to use it, let's first take a look at the following example:

```jsx
// src/components/workshop/Reducers/CountReducer.js
import React, { useState } from "react";

function CountReducer() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((count) => count + 1);
  }

  function decrementCount() {
    setCount((count) => count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Current count: {count}</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        <div className="col mb-2">
          <button className="btn btn-primary" onClick={incrementCount}>
            Increment
          </button>
          <button
            className="btn btn-secondary mr-3 ml-3"
            onClick={decrementCount}
          >
            Decrement
          </button>
          <button className="btn btn-ghost" onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default CountReducer;
```

Can be converted to `useReducer()` using the following way:

```jsx
// src/components/workshop/Reducers/CountReducer.js
import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case RESET: {
      return {
        ...state,
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = { count: 0 };

function CountReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function incrementCount() {
    dispatch({ type: INCREMENT });
  }

  function decrementCount() {
    dispatch({ type: DECREMENT });
  }

  function resetCount() {
    dispatch({ type: RESET });
  }

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Current count: {state.count}</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        <div className="col mb-2">
          <button className="btn btn-primary" onClick={incrementCount}>
            Increment
          </button>
          <button
            className="btn btn-secondary mr-3 ml-3"
            onClick={decrementCount}
          >
            Decrement
          </button>
          <button className="btn btn-ghost" onClick={resetCount}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default CountReducer;
```

However in this case we can't really see why we would prefer using the reducer hook over the state hook. If we go back to when we saw the `useState()` hook we know that we can use several `useState()` calls for every type of state that we have in our app.

In these cases, the `useReducer()` hook is much easier to work with, when we have more than 2 or 3 state variables.

So let's try to refactor a more complex piece of code using several `useState()` hooks.

```jsx
// src/components/workshop/Reducers/PostsReducer.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const FETCH_COUNT = 2;

function getBaseURL(start = 0, limit = FETCH_COUNT) {
  return `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
}

function PostsReducer() {
  const [initialFetchDone, setInitialFetchDone] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);

  function fetchMore() {
    setLoadMore(true);
    setStart((start) => start + FETCH_COUNT);
  }

  useEffect(() => {
    if (posts.length === 0) {
      setInitialFetchDone(false);
    }
  }, [posts, initialFetchDone]);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      if (isMounted) {
        setIsLoading(true);
      }

      try {
        const response = await axios.get(getBaseURL(start));

        if (isMounted) {
          setPosts((prevPosts) => {
            return [...prevPosts, ...response.data];
          });

          setIsLoading(false);
          setLoadMore(false);
          setHasError(false);
          setErrorMessage(null);
          setInitialFetchDone(true);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
          setLoadMore(false);
          setHasError(true);
          setErrorMessage(error.message);
        }
      }
    }

    if (!initialFetchDone || loadMore) {
      fetchPosts();
    }

    return () => {
      isMounted = false;
    };
  }, [start, loadMore, initialFetchDone]);

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Posts</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        {hasError && (
          <>
            <div className="col">
              <h2 className="h3">Something went wrong 👀</h2>
            </div>
            <div className="col">
              <code>{errorMessage}</code>
            </div>
          </>
        )}
        {isLoading && <div className="col mb-5">Loading data...</div>}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="col mb-5">
              <h2 className="h5">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
      <section className="row-cols-1 mb-5">
        <div className="col">
          <hr />
        </div>
        <div className="col d-flex justify-content-center">
          <button
            onClick={fetchMore}
            className="btn btn-primary w-50"
            disabled={isLoading || loadMore}
          >
            {isLoading || loadMore ? "Loading more..." : "Load more"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default PostsReducer;
```

In this case we can create a component that uses the `useReducer()` hook to fetch the data:

```jsx
// src/components/workshop/Reducers/PostsReducer.js
import React, { useReducer, useEffect } from "react";
import axios from "axios";

import {
  FETCH_INITIAL_POSTS_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOAD_MORE_REQUEST,
} from "./PostsReducer-types";

import { postsInitialState, postsReducer } from "./PostsReducer-reducer";

const FETCH_COUNT = 2;

function getBaseURL(start = 0, limit = FETCH_COUNT) {
  return `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
}

function PostsReducer() {
  const [
    {
      initialFetchDone,
      isLoading,
      loadMore,
      hasError,
      errorMessage,
      posts,
      start,
    },
    dispatch,
  ] = useReducer(postsReducer, postsInitialState);

  function fetchMore() {
    dispatch({ type: LOAD_MORE_REQUEST, payload: FETCH_COUNT });
  }

  useEffect(() => {
    if (posts.length === 0) {
      dispatch({ type: FETCH_INITIAL_POSTS_REQUEST });
    }
  }, [posts, initialFetchDone]);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      if (isMounted) {
        dispatch({ type: FETCH_REQUEST });
      }

      try {
        const response = await axios.get(getBaseURL(start));

        if (isMounted) {
          dispatch({ type: FETCH_SUCCESS, payload: response.data });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: FETCH_ERROR, payload: error.message });
        }
      }
    }

    if (!initialFetchDone || loadMore) {
      fetchPosts();
    }

    return () => {
      isMounted = false;
    };
  }, [start, loadMore, initialFetchDone]);

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Posts</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        {hasError && (
          <>
            <div className="col">
              <h2 className="h3">Something went wrong 👀</h2>
            </div>
            <div className="col">
              <code>{errorMessage}</code>
            </div>
          </>
        )}
        {isLoading && <div className="col mb-5">Loading data...</div>}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="col mb-5">
              <h2 className="h5">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
      <section className="row-cols-1 mb-5">
        <div className="col">
          <hr />
        </div>
        <div className="col d-flex justify-content-center">
          <button
            onClick={fetchMore}
            className="btn btn-primary w-50"
            disabled={isLoading || loadMore}
          >
            {isLoading || loadMore ? "Loading more..." : "Load more"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default PostsReducer;
```

```jsx
// src/components/workshop/Reducers/PostsReducer-types.js
export const FETCH_INITIAL_POSTS_REQUEST = "FETCH_INITIAL_POSTS_REQUEST";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOAD_MORE_REQUEST = "LOAD_MORE_REQUEST";
```

```jsx
// src/components/workshop/Reducers/PostsReducer-reducer.js
import {
  FETCH_INITIAL_POSTS_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOAD_MORE_REQUEST,
} from "./PostsReducer-types";

export const postsInitialState = {
  initialFetchDone: true,
  isLoading: false,
  loadMore: false,
  hasError: null,
  errorMessage: null,
  posts: [],
  start: 0,
};

export function postsReducer(state, action) {
  switch (action.type) {
    case FETCH_INITIAL_POSTS_REQUEST: {
      return {
        ...state,
        initialFetchDone: false,
      };
    }
    case LOAD_MORE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        loadMore: true,
        hasError: false,
        start: state.start + action.payload,
        errorMessage: null,
        initialFetchDone: false,
      };
    }
    case FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loadMore: false,
        hasError: false,
        errorMessage: null,
        initialFetchDone: true,
        posts: [...state.posts, ...action.payload],
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        loadMore: false,
        hasError: true,
        errorMessage: action.payload,
        initialFetchDone: false,
      };
    }
    default: {
      return state;
    }
  }
}
```

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
