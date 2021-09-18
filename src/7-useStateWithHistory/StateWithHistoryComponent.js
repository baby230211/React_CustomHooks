import React, { useState, useEffect } from "react";
import useStateWithHistory from "./useStateWithHistory";

const StateWithHistoryComponent = () => {
  const [name, setName] = useState("Kyle");
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>

      <button onClick={() => go(1)}>Go to Index 2</button>
      <button onClick={() => setName("James")}>Change Name</button>
    </div>
  );
};

export default StateWithHistoryComponent;
