import { ADD2, SUB2, INCREMENT2 } from "../action-types";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD2:
      return { ...state, count: state.count + action.value };
    case SUB2:
      return { ...state, count: state.count - action.value };
    case INCREMENT2:
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

export default reducer;
