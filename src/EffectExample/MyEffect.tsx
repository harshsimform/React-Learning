// Think of the useEffect Hook as a partial replacement for React lifecycle events. The useEffect Hook can replicate the behavior of componentDidMount, componentDidUpdate and componentWillUnmount methods.

// In other words, you can respond to changes in any component that contains the useEffect Hook.

//? Some common use cases of useEffect are:

// Add an event listener for a button
// Data fetching from API when component mounts
// Perform an action when state or props change
// Clean up event listeners when the component unmounts
// In each case above, useEffect is used in place of a lifecycle method.

import React, { useState, useEffect } from "react";

interface Data {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
}

const MyEffect: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.address.street}</p>
        </div>
      ))}
    </div>
  );
};

export default MyEffect;
