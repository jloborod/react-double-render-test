import { useState } from "react";

interface Props {
  value?: number;
}

const Counter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const increment = (v: number) => {
    if (v <= 9) return v + 1;
    return v;
  };

  const decrement = (v: number) => {
    if (v >= 1) return v - 1;
    return v;
  };

  return (
    <div>
      <div>{counter}</div>
      <button disabled={counter === 10} onClick={() => setCounter(increment)}>
        +
      </button>
      <button disabled={counter === 0} onClick={() => setCounter(decrement)}>
        -
      </button>
    </div>
  );
};

export default Counter;
