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
