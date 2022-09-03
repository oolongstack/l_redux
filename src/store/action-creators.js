import { ADD1, INCREMENT1, SUB1 } from "./action-types";
function addAction1(value) {
  return {
    type: ADD1,
    value,
  };
}

function subAction1(value) {
  return {
    type: SUB1,
    value,
  };
}
function incrementAction1() {
  return {
    type: INCREMENT1,
  };
}

export { addAction1, subAction1, incrementAction1 };
