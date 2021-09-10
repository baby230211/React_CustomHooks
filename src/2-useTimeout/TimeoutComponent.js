import React, { useState } from "react";
import useTimeout from "./useTimeout";

const TimeoutComponent = () => {
  const [value, setValue] = useState(10);
  const { reset, clear } = useTimeout(() => setValue(0), 1000);

  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </>
  );
};

export default TimeoutComponent;
