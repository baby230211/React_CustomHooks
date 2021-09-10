import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const DebounceComponent = () => {
  const [value, setValue] = useState(10);
  useDebounce(() => alert(value), 1000, [value]);
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default DebounceComponent;
