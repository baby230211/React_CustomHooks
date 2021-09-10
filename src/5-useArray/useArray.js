import React, { useState, useEffect } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  const set = (newArray) => {
    setArray([...newArray]);
  };
  const push = (newValue) => {
    setArray((prevArray) => {
      const newArray = prevArray.slice();
      newArray.push(newValue);
      return newArray;
    });
  };
  const update = (index, newValue) => {
    setArray((prevArray) => {
      const newArray = prevArray.slice();
      newArray.splice(index, 1, newValue);
      return newArray;
    });
  };
  const remove = (index) => {
    setArray((prevArray) => {
      const newArray = prevArray.slice();
      newArray.splice(index, 1);
      return newArray;
    });
  };
  const filter = (callback) => {
    setArray((prevArray) => {
      const newArray = prevArray.filter(callback);
      return newArray;
    });
  };
  const clear = () => {
    setArray([]);
  };
  return { array, set, push, update, clear, filter, remove };
}
