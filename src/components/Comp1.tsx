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
