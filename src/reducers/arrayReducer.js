import React from 'react';
import orderBy from 'lodash/orderBy';
import { toast } from 'react-toastify';

// function Counter({initialCount}) {
//   const [state, dispatch] = useReducer(reducer, initialCount, init);
//   return (
//     <>
//       Count: {state.count}
//       <button
//         onClick={() => dispatch({type: 'reset', payload: initialCount})}>
//         Reset
//       </button>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }

export const arrayReducer = (state, action) => {
  // debugger
  const { type, id, payload, sortBy, order, isAddToStart } = action;
  switch (type) {
    case 'ADD':
      if (!payload) {
        console.error('payload is required!');
        return state;
      }
      // debugger
      let val = state.find(item => item.id === payload.id);
      if (state.find(item => item.id === payload.id)) {
        toast(<span className="text-warning">Item already exists in the list!</span>);
        return state;
      }
      if (isAddToStart) {
        return [payload, ...state];
      }
      return [...state, payload];
    case 'REMOVE':
      if (!id) {
        console.error('id is required!');
        return state;
      }
      return state.filter(item => item.id !== id);
    case 'EDIT':
      if (!id) {
        console.error('id is required!');
        return state;
      }
      return state.map(item => (item.id === id ? payload : item));
    case 'SORT':
      if (!sortBy || !order) {
        console.error('sortBy and order, both are required!');
        return state;
      }
      return orderBy(state, sortBy, order);
    case 'ADD_MULTIPLE':
      return state.concat(payload);

    default:
      return state;
  }


};
