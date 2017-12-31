import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload || false; // returns false when action.payload is ''
    default:
      return state;
  }
}
