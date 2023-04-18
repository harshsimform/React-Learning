// Class components extend from the React.Component class. React.Component objects have state, meaning the object can hold information that can change over the lifetime of the object. They can also respond to lifecycle methods, like ComponentDidMount(), ComponentDidUpdate(), and ComponentWillUnMount().

// To define a React component class, you need to extend React.Component. You must develop a render() method that returns a React element by extending from React.Component. Data can be passed between classes and between class components. The render() method will return the JSX to be rendered

//? Note:- Lifecycle methods enable updated state information to trigger a re-render, which updates the DOM with revised HTML markup.

// Example
import React from "react";

// Define the props for the component
interface MyProps {
  name: string;
}

// Define the state for the component
interface MyState {
  count: number;
}

// Define the class component
class ClassComp extends React.Component<MyProps, MyState> {
  // Initialize the state with a default value
  state = {
    count: 0,
  };

  // Define a method for updating the count state
  incrementCount = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Render the component
  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{name}!</h1>
        <p>You clicked {count} times.</p>
        <button onClick={this.incrementCount}>Click me</button>
      </div>
    );
  }
}

export default ClassComp;
