import counterClasses from "./Counter.module.css";
import { useReducer } from "react";
import { counterReducer, initialState, actions } from "../../reducers/counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className={counterClasses.counter}>
      <h1>Counter</h1>
      <h2>Count: {state.count}</h2>
      <div className={counterClasses.actions}>
        <button onClick={() => dispatch({ type: actions.DECREMENT_COUNTER })}>
          -
        </button>
        <button onClick={() => dispatch({ type: actions.INCREMENT_COUNTER })}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;