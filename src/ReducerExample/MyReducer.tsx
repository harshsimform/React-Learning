import React, { useReducer } from "react";

const reducer = (state: number, action: any) => {
  // ✅ ui only dispatches events, logic is in the reducer
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const MyReducer = (): JSX.Element => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default MyReducer;
