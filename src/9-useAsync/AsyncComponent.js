import React from "react";
import useAsync from "./useAsync";

const AsyncComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hello World") : reject("Error");
      });
    });
  });
  return (
    <div>
      <div>loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
};

export default AsyncComponent;
