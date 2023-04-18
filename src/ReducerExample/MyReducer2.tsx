//   useReducer example using state object and action object
import { useReducer } from "react";

//   define the shape of your state object
interface State {
  firstCounter: number;
  // add more properties if needed
}

//   define the shape of your actions
type Action = { type: "increment" } | { type: "decrement" };

//   making state an object
const initialState: State = {
  firstCounter: 0,
};

const reducer = (state: State, action: Action): State => {
  // ✅ ui only dispatches events, logic is in the reducer
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    default:
      return state;
  }
};

const MyReducer2 = (): JSX.Element => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {count.firstCounter} </h1>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
};

export default MyReducer2;
