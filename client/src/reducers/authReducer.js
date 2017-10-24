import { FETCH_USER } from '../actions/types';
//reducers takes initial state and action and provides new state these are pure functions
export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
