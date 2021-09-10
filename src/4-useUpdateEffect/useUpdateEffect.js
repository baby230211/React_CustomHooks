import React, { useState, useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  // const [isFirstRender, setIsFirstRender] = useState(false);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
