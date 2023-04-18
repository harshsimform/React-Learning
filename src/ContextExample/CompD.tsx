// using ContextAPI
import { Id, Name } from "./CompA";

const CompD = () => {
  return (
    <>
      <Id.Consumer>
        {(id) => {
          return (
            <Name.Consumer>
              {(name) => {
                return (
                  <h1>
                    {id} {name}
                  </h1>
                );
              }}
            </Name.Consumer>
          );
        }}
      </Id.Consumer>
    </>
  );
};

export default CompD;
