import { useState } from "react";
import { useCounterProps } from "./userCounter.types";

export const useCounter = ({ initialCount = 0 }: useCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
