import React, { useState } from "react";
import { useLocalStorage, useSessionStorage } from "./useStorage";

const StorageComponent = () => {
  const [name, setName, removeName] = useLocalStorage("name", "Kyle");
  const [age, setAge, removeAge] = useSessionStorage("age", 40);
  return (
    <div>
      <div>
        {name} - {age}
      </div>

      <button onClick={() => setName("John")}>Set Name</button>
    </div>
  );
};

export default StorageComponent;
