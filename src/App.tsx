import { useState } from "react";
import "./App.css";

type myProps = {
  fname: string;
  age: number;
};

const App = <PROPS extends myProps>({ fname, age }: PROPS): JSX.Element => {
  const ary: Array<{ id: number; name: string }> = [
    { id: 1, name: "harsh" },
    { id: 2, name: "vatsal" },
    { id: 3, name: "ravi" },
  ];
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    if (count < 1) {
      console.log("0 limit reached!");
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count {count}</h1>
      <p>
        {fname} and {age}
      </p>
      <button type="submit" style={{ marginRight: 5 }} onClick={decr}>
        -
      </button>
      <button type="submit" onClick={incr}>
        +
      </button>
      <ul>
        {ary.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
