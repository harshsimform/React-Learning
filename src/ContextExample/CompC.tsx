// using ContextAPI
import CompD from "./CompD";
// using useContext()
import { useContext } from "react";
import { Id, Name } from "./CompA";
const CompC = () => {
  const id = useContext(Id);
  const name = useContext(Name);
  return (
    <>
      {/* using useContext()  */}
      <h1>
        {id} and {name}
      </h1>
      {/* using ContextAPI */}
      <CompD />
    </>
  );
};

export default CompC;
