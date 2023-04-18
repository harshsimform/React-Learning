// using ContextAPI
import { createContext } from "react";
import CompB from "./CompB";

// type ContextData = {
//   id: number;
//   fname: string;
// };

const Id = createContext<number>(0);
const Name = createContext<string>("");
const CompA: React.FC = (): JSX.Element => {
  return (
    <>
      <Id.Provider value={21}>
        <Name.Provider value="harsh">
          <CompB />
        </Name.Provider>
      </Id.Provider>
    </>
  );
};

export default CompA;
export { Id, Name };
