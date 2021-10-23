import CounterAction from "./CounterAction";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction } from "../../redux/CounterRedux";
import { decrementAction } from "../../redux/CounterRedux";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const counterState = useSelector(state => state.countReducer.count);
  const dispatch = useDispatch();

  const countUp = () => {
    dispatch(incrementAction(1));
  };
  const countDown = () => {
    if(counterState>0){
      dispatch(decrementAction(1));
    }
  };

  return (
    <div className="py-5">
      <div className="w-50 p-5 mx-auto">
        <div className="border border-info border-3 rounded py-5 shadow">
          <h2 className="text-center">Counter</h2>
          <p className="fs-3 fw-bold">{counterState}</p>
          <CounterAction incr={countUp} decr={countDown} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
