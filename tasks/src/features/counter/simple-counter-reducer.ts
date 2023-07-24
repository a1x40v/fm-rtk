export const increment = (n: number): CounterAction => ({ type: 'INCREMENT', payload: n });

export const decrement = (n: number): CounterAction => ({ type: 'DECREMENT', payload: n });

export const reset = (): CounterAction => ({ type: 'RESET' });

type CounterAction = { type: 'INCREMENT' | 'DECREMENT'; payload: number } | { type: 'RESET' };
type CounterState = { count: number };

export const counterReducer = (state: CounterState = { count: 0 }, action: CounterAction): CounterState => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + action.payload };
  }

  if (action.type === 'DECREMENT') {
    return { count: state.count - action.payload };
  }

  if (action.type === 'RESET') {
    return { count: 0 };
  }

  return state;
};
