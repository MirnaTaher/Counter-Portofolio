import CounterAction from "./CounterAction";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count+1);
  };
  const countDown = () => {
      if(count>0){
        setCount(count-1);
      }
  };

  return (
    <div className="bg-light bg-gradient">
      <div className="w-50 p-5 mx-auto">
        <div className="border border-info border-3 rounded py-5">
          <h2 className="text-center">Counter</h2>
          <p className="fs-3 fw-bold">{count}</p>
          <CounterAction incr={countUp} decr={countDown}/>
        </div>
      </div>
    </div>
  );
};

export default Counter;
