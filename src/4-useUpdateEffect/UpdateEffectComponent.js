import useUpdateEffect from "./useUpdateEffect";
import React, { useState } from "react";

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(0);
  useUpdateEffect(() => alert(count), [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UpdateEffectComponent;
