// useState is called inside a function component to add local state to it, which will be preserved between re-renders. useState returns a pair: the current state value and a function that lets you update it.

// You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

//? Here are some advantages of React Hooks:-
// Better code composition: Hooks allow lifecycle methods to be written in a linear, render flowing order rather than splitting them among relevant Class Components.
// Reuse states and components: Hooks make it easier to share stateful logic between different components. You use the same Hook to call states throughout a program rather than just within the same Class.
// Better testing: Hooks consolidate stateful logic so it’s all defined in a relevant Hook and is, therefore, easier to test.
// Performance: When optimized, React Hooks are the fastest form of functional component.

import { useState } from "react";

const Comp1: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </>
  );
};

export default Comp1;
