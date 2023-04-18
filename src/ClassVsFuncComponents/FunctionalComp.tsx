// Functional components are more concise, leading to cleaner, less complex code. They don’t include lifecycle methods

// In React, hooks are functions that allow you to hook into React state and lifecycle features from function components. This allows you to use React without classes.

//? Note:- Anything that can be done using class components can also be done using functional components. The only exception is that React supports a special class component called "Error Boundaries" that can’t be duplicated as a function component.

//? which components to use?:- Using functional components encourages composition, while class components lend themselves to inheritance design patterns. Currently, composition is considered a best practice in programming, which is why most new React code uses functional components instead of class components.

import React, { useState } from "react";

// Define the props for the component
interface Props {
  name: string;
}

// Define the component as a function that takes props as input
const MyComponent: React.FC<Props> = ({ name }): JSX.Element => {
  // Define the state for the component
  const [count, setCount] = useState(0);

  // Define a function for updating the count state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Render the component
  return (
    <div>
      <h1>{name}!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default MyComponent;
