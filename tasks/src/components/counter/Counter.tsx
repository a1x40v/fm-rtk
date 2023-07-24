import { useReducer } from 'react';
import { counterReducer, decrement, increment, reset } from '../../features/counter/counter-reducer';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
