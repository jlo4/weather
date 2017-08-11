import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]); OR ES6 BELOW,
    //do not manipulate array, create new array
    return [ action.payload.data, ...state];
  }
  return state;
}
