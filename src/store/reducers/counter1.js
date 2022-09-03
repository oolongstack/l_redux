import { ADD1, SUB1, INCREMENT1 } from "../action-types";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD1:
      return { ...state, count: state.count + action.value };
    case SUB1:
      return { ...state, count: state.count - action.value };
    case INCREMENT1:
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

export default reducer;
