function CounterAction(props) {
  return (
    <div className="py-5">
      <button className="btn border-info border border-2 fs-4 me-3" onClick={props.incr}>Increment</button>
      <button className="btn border-info border border-2 fs-4" onClick={props.decr}>Decrement</button>
    </div>
  );
}

export default CounterAction;
