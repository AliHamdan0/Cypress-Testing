"use client";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(1); /// the JS logic is just increase the counter by one
  }, []);
  return <>{counter}</>;
};
